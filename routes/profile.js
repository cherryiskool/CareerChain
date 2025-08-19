const express = require('express');
const router = express.Router();
const { upload } = require('../config/profileBucket');

const profileController = require('../controllers/profileController');

router.get('/profile/:username', profileController.getProfilePage);

router.get('/editProfileForm', profileController.getProfileEditForm);

router.delete('/editProfileForm', profileController.removeProfileEditForm);

router.get('/editProfileForm/:inputVariant', profileController.getEditProfileFormInput);

router.get('/currentUserDetails', profileController.currentUserDetails);

router.post('/editProfileContractAddress', profileController.editProfileContractAddress);

router.get('/userDetails/:username', profileController.userDetails);

router.post('/search', profileController.search);

router.get('/search/:searchQuery', profileController.searchResults);

router.post('/editPfpAndBio', upload.single('pfp'), profileController.editPfpAndBio);

router.get('/editPfpAndBio', profileController.getPfpBioEditForm);

router.delete('/editPfpAndBio', profileController.removePfpBioEditForm);

router.delete('/editProfileForm/:inputVariant', profileController.removeEditProfileFormInput);

module.exports = router;