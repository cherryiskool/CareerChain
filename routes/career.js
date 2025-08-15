const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');
const passport = require('passport');

router.get('/', careerController.getHomePage);

router.get('/login', careerController.getLoginPage);

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/register', careerController.getRegisterPage);

router.post('/register', careerController.registerAttempt);

router.get('/profile/:username', careerController.getProfilePage);

router.get('/error', careerController.getErrorPage);

module.exports = router;