const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const passport = require('passport');


router.get('/login', authController.getLoginPage);

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

router.post('/logout', authController.logOut);

router.get('/register', authController.getRegisterPage);

router.post('/register', authController.registerAttempt);

module.exports = router;