const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');

router.get('/cate/:cateName', dishController.getDishesByCate);
router.get('/:id', dishController.getDishByID);

router.get('/', ()=>{});

module.exports = router;
