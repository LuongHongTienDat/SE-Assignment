const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/auth', userController.authUser);
router.post('/update/:id', userController.updateUser);



module.exports = router;
