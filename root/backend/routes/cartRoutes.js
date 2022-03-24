const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddlewares = require('../middlewares/authMiddlewares');

router.get('/', authMiddlewares.protect, cartController.getCart);
router.patch('/update', authMiddlewares.protect, cartController.updateCart);


module.exports = router;
