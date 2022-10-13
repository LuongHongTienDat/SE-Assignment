const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');
const authMiddlewares = require('../middlewares/authMiddlewares');

router.get('/cate/:cateName', dishController.getDishesByCate);
router.get('/cate', dishController.getCate);

router.get('/', dishController.getDishes);
router.get('/:id', dishController.getDishByID);
router.delete('/:id', authMiddlewares.protect,authMiddlewares.isAdmin, dishController.deleteDish);
router.post('/:id', authMiddlewares.protect,authMiddlewares.isAdmin, dishController.createDish);
router.patch('/:id',authMiddlewares.protect,authMiddlewares.isAdmin, dishController.updateDish);

module.exports = router;
