const profileModel = require('../models/profileModel');
const homeModel = require('../models/homeModel');
const path = require('path');
const { v4:uuidv4 } = require('uuid');
const { PutObjectCommand } = require('@aws-sdk/client-s3');
const { s3 } = require('../config/profileBucket');


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
        res.redirect('/error');
    }
}

exports.editPfpAndBio = async (req, res) => {
    try {
        let pfp = req.file;
        console.log('pgpgpgp', pfp == null)
        let pfpFilename;
        if (pfp == null) {
            pfpFilename = 'Default_pfp.jpg';
        } else {
            const fileExt = path.extname(pfp.originalname);
            pfpFilename = `${uuidv4()}${fileExt}`;
        }

        let bio = req.body.bio;
        console.log('bio', bio)
        if (bio == "") {
            bio = req.user.bio;
        }

        console.log('bio', bio)
        await profileModel.updateUserPfpAndBio(req.user.id, pfpFilename, bio);

        if (pfp != null) {
            const params = {
                Bucket: process.env.BUCKET_NAME,
                Key: `profilePictures/${pfpFilename}`,
                Body: pfp.buffer,
                ContentType: pfp.mimetype
            }

            await s3.send(new PutObjectCommand(params));
        }


        res.redirect(`/profile/${req.user.username}`);

    } catch (err) {
        console.log(err)
        res.redirect('/error');
    }
}

exports.getPfpBioEditForm = async (req, res) => {
    try {
        res.render('partials/editPfpBioForm', {pageTitle: req.params.username, pageContent: `${req.params.username}'s Profile Page`, user: user[0], layout: false})
    } catch (err) {
        res.send('');
    }
}

exports.removePfpBioEditForm = async (req, res) => {
    res.send('');
}

exports.removeEditProfileFormInput = async (req, res) => {
    res.send('');
}