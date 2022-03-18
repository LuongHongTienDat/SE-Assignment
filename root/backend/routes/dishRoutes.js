const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');

router.get('/cate/:cateName', dishController.getDishesByCate);
router.get('/cate', dishController.getCate);
router.post('/cate', dishController.createDish);

router.get('/:id', dishController.getDishByID);
router.delete('/:id', dishController.deleteDish);
router.post('/:id', dishController.createDish);
router.patch('/:id',dishController.updateDish);

module.exports = router;
