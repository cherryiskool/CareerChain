
exports.getHomePage = (req, res) => {
    try {
        res.render('homepage', {pageTitle: 'Homepage', pageContent: 'Homepage for CareerChain Website'});
    } catch (err) {
        res.redirect('/error');
    }
}



exports.getErrorPage = (req, res) => {
    res.render('error', {pageTitle: 'Error', pageContent: 'Error getting your previous request'});
}

exports.getPostForm = (req, res) => {
    try {
        res.render('partials/postForm')
    } catch (err) {
        return
    }
}

exports.removePostForm = (req, res) => {
    res.send('');
}