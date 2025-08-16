const profileModel = require('../models/profileModel');

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

exports.userDetails = (req, res) => {
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