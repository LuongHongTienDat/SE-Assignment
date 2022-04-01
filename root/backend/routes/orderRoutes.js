const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddlewares = require('../middlewares/authMiddlewares');

router.post('/', authMiddlewares.protect, orderController.createOrder);
router.patch('/:id', authMiddlewares.protect, authMiddlewares.isAdmin,  orderController.updateOrderStatus);


module.exports = router;
