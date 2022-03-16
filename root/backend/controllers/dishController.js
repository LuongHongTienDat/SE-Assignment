const Dish = require('../models/dishModel');

class DishController {
    
//  [ GET - ROUTE: /:id ]
    async getDishByID(req,res){
        var dish = await Dish.findById(req.params.id);
        if (dish){
            res.json(dish);
        }
        else {
            res.status(404);
            throw new Error('Dish does not exist!');
        }
    }

//  [ GET - ROUTE: /cate/:cateName ]
    async getDishesByCate(req,res){
        var dishes = await Dish.find({category: req.params.nameCate});
        if (dishes){
            res.json(dishes);
        }
        else {
            res.status(404);
            throw new Error('Category does not exist!');
        }
    }

//  [ POST - ROUTE: / (updated soon) ]
    async createDish(req,res){
        const { name, category, dishDetails, image, price, countInStock } = req.body;
        const newProduct = await Product.create({
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

    }
}

module.exports = new DishController;
