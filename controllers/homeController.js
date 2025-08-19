const homeModel = require('../models/homeModel');

exports.getHomePage = async (req, res) => {
    try {
        [posts] = await homeModel.getAllPosts();

        function removeNulls(post) {
            return post.postId != null;
        }
        posts = posts.filter(removeNulls);
        
        if (req.isAuthenticated()) {
            [likedPosts] = await homeModel.getUsersLikes(req.user.id);
            likedPosts = likedPosts.map((x) => x.postId);
        } else {
            likedPosts = [];
        }
        console.log('liked', likedPosts)


        res.render('homepage', {pageTitle: 'Homepage', pageContent: 'Homepage for CareerChain Website', posts: posts, likedPosts: likedPosts});
    } catch (err) {
        console.log('error that is fucking up the EB', err);
        res.redirect('/error');
    }
}

exports.getErrorPage = (req, res) => {
    res.render('error', {pageTitle: 'Error', pageContent: 'Error getting your previous request'});
}

exports.getPostForm = (req, res) => {
    try {
        console.log(req.isAuthenticated())
        if (req.isAuthenticated()) {
            res.render('partials/postForm', {pageTitle: 'Homepage', pageContent: 'Homepage for CareerChain Website', layout: false})
        } else {
            res.send('')
        }
    } catch (err) {
        res.send('')
    }
}

exports.removePostForm = (req, res) => {
    res.send('');
}

exports.createNewPost = async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const postText = String(req.body.postText);
            await homeModel.saveNewPostToDatabase(postText, Number(req.user.id));
            res.redirect('/');
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        console.log(err)
        res.redirect('/error');
    }
}

exports.toggleLike = async (req, res) => {
    try {
        [posts] = await homeModel.getAllPosts();
        let likes = posts.find(post => post.postId == req.params.postId).likes;

        if (req.params.action == 'like' && req.isAuthenticated()) {
            await homeModel.setLiked(req.user.id, req.params.postId);
            await homeModel.addLike(req.params.postId);
            likes = likes + 1;

            [likedPosts] = await homeModel.getUsersLikes(req.user.id);
            likedPosts = likedPosts.map((x) => x.postId);
            res.render('partials/likeButton', {pageTitle: 'Homepage', pageContent: 'Homepage for CareerChain Website', postId: Number(req.params.postId), likes: likes, likedPosts: likedPosts, layout: false})
        } else if (req.params.action == 'unlike' && req.isAuthenticated()) {
            await homeModel.removeLiked(req.user.id, req.params.postId);
            await homeModel.removeLike(req.params.postId);
            likes = likes - 1;
            [likedPosts] = await homeModel.getUsersLikes(req.user.id);
            likedPosts = likedPosts.map((x) => x.postId);
            res.render('partials/likeButton', {pageTitle: 'Homepage', pageContent: 'Homepage for CareerChain Website', postId: Number(req.params.postId), likes: likes, likedPosts: likedPosts, layout: false})
        } else {
            likedPosts = []
            res.render('partials/likeButton', {pageTitle: 'Homepage', pageContent: 'Homepage for CareerChain Website', postId: Number(req.params.postId), likes: likes, likedPosts: likedPosts, layout: false})

        }
    } catch (err) {
        likedPosts = []
        console.log(err)
        res.render('partials/likeButton', {pageTitle: 'Homepage', pageContent: 'Homepage for CareerChain Website', postId: Number(req.params.postId), likes: likes, likedPosts: likedPosts, layout: false})

    }
}