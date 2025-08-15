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

exports.registerAttempt = (req, res) => {
    try {
        
    } catch (err) {

    }
}

exports.getProfilePage = (req, res) => {
    try {
        res.render('profile', {pageTitle: req.params.username, pageContent: `${req.params.username}'s Profile Page`});
    } catch (err) {

    }
}

exports.getErrorPage = (req, res) => {
    res.render('error', {pageTitle: 'Error', pageContent: 'Error getting your previous request'});
}