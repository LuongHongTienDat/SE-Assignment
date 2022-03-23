const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.getCart);
router.patch('/update', cartController.updateCart);


module.exports = router;
