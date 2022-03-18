const Dish = require('../models/dishModel');
const Cate = require('../models/categoryModel');

class DishController {
    
//  [ GET - ROUTE: api/dish/:id ]
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

//  [ GET - ROUTE: api/dish/cate ]
    async getCate(req,res){
        var cates = await Cate.find();
        if (cates){
            res.json(cates);
        }
        else {
            res.status(404);
            throw new Error('There is no category');
        }
    }

//  [ GET - ROUTE: api/dish/cate/:cateName ]
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

    }

//  [ DELETE - ROUTE: api/dish/:id ]
    async deleteDish(req,res){
        var dish = await Dish.findById(req.params.id);
        if (dish){
            await Dish.deleteOne({ _id: req.params.id });
            res.json({dish, message: "Dish is deleted!"});
        }
        else {
            res.status(404);
            throw new Error('Dish does not exist!');
        }
    }

//  [ PATCH	 - ROUTE: api/dish/:id ]
    async updateDish(req,res){
        var dish = await Dish.findById(req.params.id);
        if (dish){
            var newDish = await Dish.findOneAndUpdate({_id: req.params.id}, 
                {
                    name : (req.body.name || dish.name),
                    image : (req.body.image || dish.image),
                    dishDetails : (req.body.dishDetails || dish.dishDetails),
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
    }
}

module.exports = new DishController;
