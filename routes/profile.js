const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');

router.get('/profile/:username', profileController.getProfilePage);

router.get('/editProfileForm', profileController.getProfileEditForm);

router.delete('/editProfileForm', profileController.removeProfileEditForm);

router.get('/editProfileForm/:inputVariant', profileController.getEditProfileFormInput);

module.exports = router;