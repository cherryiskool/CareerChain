const authModel = require('../models/authModel')


exports.getLoginPage = (req, res) => {
    try {
        res.render('login', {pageTitle: 'Login', pageContent: 'Login page for CareerChain Website'});
    } catch (err) {
        res.redirect('/error');
    }
}

exports.logOut = (req, res) => {
    req.logout(() => {
        res.redirect('/');
    })
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
        const username = req.body.username;
        const password = req.body.password;
        const walletAddress = req.body.walletAddress;

        if (req.body.walletAddress == null || req.body.walletAddress == '') {
            req.flash('error', 'Please connect to MetaMask');
            res.redirect('/register')
        }

        await authModel.registerUserToDatabase(username, password, walletAddress);

        res.redirect('/login')
    } catch (err) {
        req.flash('error', 'User Details Taken');
        res.redirect('/register')
    }
}