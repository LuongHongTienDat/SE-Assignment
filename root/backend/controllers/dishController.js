const Dish = require('../models/dishModel');

class DishController {
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
}

module.exports = new DishController;
