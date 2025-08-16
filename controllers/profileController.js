const profileModel = require('../models/profileModel');
const homeModel = require('../models/homeModel');
const homeModel = require('../models/homeModel');

exports.getProfilePage = async (req, res) => {
    try {
        [user] = await profileModel.getUserByUsername(req.params.username)
        console.log(user)
        res.render('profile', {pageTitle: req.params.username, pageContent: `${req.params.username}'s Profile Page`, user: user[0]});
    } catch (err) {
        res.redirect('/error');
    }
}

exports.getProfileEditForm = (req, res) => {
    try {
        if (req.isAuthenticated()) {
            res.render('partials/profileEditForm', {pageTitle: req.params.username, pageContent: `${req.params.username}'s Profile Page`, user: user[0], layout: false});
        } else {
            res.send('')
        }
    } catch (err) {
        res.send('');
    }
}

exports.removeProfileEditForm = (req, res) => {
    res.send('');
}

exports.getEditProfileFormInput = (req, res) => {
    try {
        if (req.isAuthenticated()) {
            if (req.params.inputVariant == 'EducationInput') {
                res.render('partials/educationInput', {pageTitle: req.params.username, pageContent: `${req.params.username}'s Profile Page`, user: user[0], layout: false});
            }
            else if (req.params.inputVariant == 'WorkInput') {
                res.render('partials/workHistoryInput', {pageTitle: req.params.username, pageContent: `${req.params.username}'s Profile Page`, user: user[0], layout: false});
            }
            else {
                res.send('');
            }
        } else {
            res.send('')
        }
    } catch (err) {
        res.send('');
    }
}

exports.currentUserDetails = (req, res) => {
    try {
        if(req.isAuthenticated()) {
            res.json({success: true, username: req.user.username, walletAddress: req.user.walletAddress, contractAddress: req.user.contractAddress});
        } else {
            res.status(404).json({success: false, error: 'No Session User Found'});
        }
    } catch (err) {
        res.status(500).json({success: false, error: err});
    }
}

exports.editProfileContractAddress = async (req, res) => {
    try {
        console.log('entered this bitch', req.body)
        await profileModel.updateUserContractAddress(req.body.contractAddress, req.user.id);
        res.json({success: true});
    } catch (err) {
        console.log(err);
        res.status(500).json({success: false, error: err});
    }
}

exports.userDetails = async (req, res) => {
    try {
        [user] = await profileModel.getUserByUsername(req.params.username);
        if (user != null) {
            res.json({success: true, contractAddress: user[0].contractAddress})
        } else {
            res.status(404).json({success: false, error: 'User not found'});
        }
    } catch (err) {
        res.status(500).json({success: false, error: err});
    }
}

exports.search = async (req, res) => {
    try {
        res.redirect(`/search/${req.body.searchQuery}`)
    } catch (err) {
        req.flash('error', err);
        res.redirect('back');
    }
}

exports.searchResults = async (req, res) => {
    try {
        const searchQuery = req.params.searchQuery;
        [usersPosts] = await homeModel.getAllPosts();
        console.log('userpost', usersPosts);
        let related = [];
        let unrelated = [];
        let finalQuery = [];

        for (let userPost of usersPosts) {
            
            if (userPost.username.toUpperCase().match(searchQuery.toUpperCase())) {
                related.push(userPost);
            }
            else if (userPost.postText != null) {
                if(userPost.postText.toUpperCase().match(searchQuery.toUpperCase())){
                    related.push(userPost);
                } else {
                    unrelated.push(userPost);
                }
            }
            else {
                unrelated.push(userPost);
            }
        }

        finalQuery = related.concat(unrelated);

        res.render('searchResults', {pageTitle: searchQuery, pageContent: `${searchQuery} Search Results`, posts: finalQuery})

    } catch (err) {
        req.flash('error', err);
        console.log(err);
        res.redirect('back');
    }
}