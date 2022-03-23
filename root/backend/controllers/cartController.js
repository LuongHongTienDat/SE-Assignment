const Cart = require("../models/cartModel.js");
class CartController{
    
//  [ GET - ROUTE: api/cart/:id]
    async getMyCart(req,res){
        const cart = await Cart.findOne({user: req.user._id});
        res.json(cart.orderList);
    }
//  [ POST - ROUTE: api/cart/update]
    async updateCart(req,res){
        const orderList = req.body;
        if(!orderList){
            res.status(400);
            throw new Error('No order items');
        }
        else {
            const cart = await Cart.findOneAndDelete({user: req.user._id});
            const newCart = new Cart({
                user: req.user._id,
                orderList
            })
            const createCart = await newCart.save();
            res.status(201).json(createCart);
        }
    }
}

module.exports = new CartController;
