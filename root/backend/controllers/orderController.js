const Cart = require("../models/cartModel.js");
const Order = require("../models/orderModel.js");
const asyncHandler = require('express-async-handler')

class OrderController{
    
//  [ POST - ROUTE: api/cart]
    createOrder = asyncHandler (async (req,res) => {
        const cart = await Cart.findOne({user: req.user._id});
        res.json(cart.orderList);
    })

}

module.exports = new OrderController;
