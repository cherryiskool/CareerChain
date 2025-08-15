const careerModel = require('../models/careerModel')

exports.getHomePage = (req, res) => {
    try {
        res.render('homepage', {pageTitle: 'Homepage', pageContent: 'Homepage for CareerChain Website'});
    } catch (err) {
        res.redirect('/error');
    }
}

exports.getLoginPage = (req, res) => {
    try {
        res.render('login', {pageTitle: 'Login', pageContent: 'Login page for CareerChain Website'});
    } catch (err) {
        res.redirect('/error');
    }
}

exports.getRegisterPage = (req, res) => {
    try {
        res.render('register', {pageTitle: 'Register', pageContent: 'Register page for CareerChain Website'});
    } catch (err) {
        res.redirect('/error');
    }
}

exports.registerAttempt = async (req, res) => {
    try {
        console.log('testing shit', req.body);
        const username = req.body.username;
        const password = req.body.password;
        const walletAddress = req.body.walletAddress;

        if (req.body.walletAddress == null || req.body.walletAddress == '') {
            req.flash('error', 'Please connect to MetaMask');
            res.redirect('/register')
        }

        await careerModel.registerUserToDatabase(username, password, walletAddress);

        res.redirect('/')
    } catch (err) {
        req.flash('error', 'User Details Taken');
        res.redirect('/register')
    }
}

exports.getProfilePage = (req, res) => {
    try {
        res.render('profile', {pageTitle: req.params.username, pageContent: `${req.params.username}'s Profile Page`});
    } catch (err) {
        res.redirect('/error');
    }
}

exports.getErrorPage = (req, res) => {
    res.render('error', {pageTitle: 'Error', pageContent: 'Error getting your previous request'});
}