const Cart = require("../models/cartModel.js");
const asyncHandler = require('express-async-handler')

class CartController{
    
//  [ GET - ROUTE: api/cart]
    getCart = asyncHandler (async (req,res) => {
        const cart = await Cart.findOne({user: req.user._id});
        res.json(cart.orderList);
    })
//  [ PATCH - ROUTE: api/cart/update]
    updateCart = asyncHandler (async (req,res) => {
        const orderList = req.body;
        const updatedCart = await Cart.findOneAndUpdate({user: req.user._id}, 
            {
                orderList
            },
            {
                new: true
            });
        res.status(201).json(updatedCart.orderList);
    })
}

module.exports = new CartController;
