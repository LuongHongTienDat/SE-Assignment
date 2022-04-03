const Dish = require('../models/dishModel');
const Cate = require('../models/categoryModel');
const asyncHandler = require('express-async-handler')

class DishController {

//  [ GET - ROUTE: api/dish ]
getDishes = asyncHandler( async (req,res) => {
    var dishes = await Dish.find();
    res.json(dishes);
})

//  [ GET - ROUTE: api/dish/:id ]
    getDishByID = asyncHandler( async (req,res) => {
        var dish = await Dish.findById(req.params.id);
        if (dish){
            res.json(dish);
        }
        else {
            res.status(404);
            throw new Error('Dish does not exist!');
        }
    })

//  [ GET - ROUTE: api/dish/cate ]
     getCate = asyncHandler(async(req,res) => {
        var cates = await Cate.find();
        if (cates){
            res.json(cates);
        }
        else {
            res.status(404);
            throw new Error('There is no category');
        }
    })

//  [ GET - ROUTE: api/dish/cate/:cateName ]
    getDishesByCate = asyncHandler(async(req,res) => {
        var dishes = await Dish.find({category: req.params.nameCate});
        if (dishes){
            res.json(dishes);
        }
        else {
            res.status(404);
            throw new Error('Category does not exist!');
        }
    })

//  [ POST - ROUTE: api/dish/create ]
    createDish = asyncHandler(async(req,res) => {
        const { name, category, dishDetails, image, price, countInStock } = req.body;
        const newDish = await Dish.create({
            name,
            image,
            category,
            dishDetails,
            price,
            countInStock
        });
        if (newDish) {
            await newDish.save();
            res.json(newDish);
        }
        else {
            res.status(404);
            throw new Error("Invalid data");
        }              

    })

//  [ DELETE - ROUTE: api/dish/:id ]
    deleteDish = asyncHandler(async(req,res) => {
        var dish = await Dish.findById(req.params.id);
        if (dish){
            await Dish.deleteOne({ _id: req.params.id });
            res.json({dish, message: "Dish is deleted!"});
        }
        else {
            res.status(404);
            throw new Error('Dish does not exist!');
        }
    })

//  [ PATCH	 - ROUTE: api/dish/:id ]
    updateDish = asyncHandler(async(req,res) => {
        var dish = await Dish.findById(req.params.id);
        if (dish){
            var newDish = await Dish.findOneAndUpdate({_id: req.params.id}, 
                {
                    name : (req.body.name || dish.name),
                    image : (req.body.image || dish.image),
                    dishDetails : (req.body.dishDetails || dish.dishDetails),
                    dishDescription : (req.body.dishDescription || dish.dishDescription),
                    price : (req.body.price || dish.price),
                    countInStock : (req.body.countInStock || dish.countInStock),
                    category : (req.body.category || dish.category)
                },
                {
                    new: true
                });
            res.json(newDish);
        }
        else {
          res.status(404)
          throw new Error('Dish does not exist')
        }
    })
}

module.exports = new DishController;
