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