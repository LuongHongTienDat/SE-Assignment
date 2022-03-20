const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/auth', userController.authUser);
router.post('/sendResetEmail', userController.sendResetMail);
router.post('/update/:id', userController.updateUser);
router.get('/:id', userController.getUserProfile);



module.exports = router;
