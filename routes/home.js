const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHomePage);

router.get('/error', homeController.getErrorPage);

router.get('/PostForm', homeController.getPostForm);

router.delete('/PostForm', homeController.removePostForm)

router.post('/userPost', homeController.createNewPost);

module.exports = router;