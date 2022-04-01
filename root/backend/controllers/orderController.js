const Dish = require("../models/dishModel.js");
const Order = require("../models/orderModel.js");
const asyncHandler = require('express-async-handler')

class OrderController{
    
//  [ POST - ROUTE: api/order]
    createOrder = asyncHandler (async (req,res) => {
        const {orderList, shippingAddress, paymentMethod, shippingPrice,
            totalPrice} = req.body;
        for (let i = 0 ; i < orderList.length ; i++){
            let dish = await Dish.findById(orderList[i].dish);
            if (dish.countInStock < orderList[i].quantity) {
                res.status(503);
                throw new Error(orderList[i].name + ' is out of stock');               
            }
            else {
                dish.countInStock -= orderList[i].quantity;
                await dish.save();
            }
        }
        const newOrder = await Order.create({
            user: req.user._id,
            orderList,
            shippingAddress,
            paymentMethod,
            paymentResult: 'pending',
            shippingPrice,
            totalPrice
        });
        res.status(201).json(newOrder);
        
    })

//  [ PATCH - ROUTE: api/order/:id]
    updateOrderStatus = asyncHandler (async (req,res) =>{
        const {orderStatus} = req.body;
        const order = await Order.findById(req.params.id);
        if (order){
            if (order.paymentResult != 'cancelled' && orderStatus == 'cancelled'){
                for (let i = 0 ; i < order.orderList.length ; i++){
                    let dish = await Dish.findById(order.orderList[i].dish);
                    dish.countInStock += order.orderList[i].quantity;
                    await dish.save();
                }                
            }
            order.paymentResult = orderStatus;
            const updatedOrder = await order.save();
            res.json(updatedOrder);

        }
        else {
            res.status(404);
            throw new Error('Order does not exist!');            
        }
    })

}

module.exports = new OrderController;
