const homeModel = require('../models/homeModel');

exports.getHomePage = async (req, res) => {
    try {
        [posts] = await homeModel.getAllPosts();

        function removeNulls(post) {
            return post.postId != null;
        }
        posts = posts.filter(removeNulls);
        
        res.render('homepage', {pageTitle: 'Homepage', pageContent: 'Homepage for CareerChain Website', posts: posts});
    } catch (err) {
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