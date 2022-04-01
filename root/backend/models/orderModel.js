const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const orderModel = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    orderList:[{
        dish:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Dish"
        },
        name:{
            type: String,
            required:true,
            default:""
        },
        image:{
            type: String,
            required: true,
            default:""
        },
        price:{
            type: Number,
            required: true,
            default:0
        },
        quantity: { 
            type: Number,
            required: true,
        },
        default:[]    
        },
    ],
    shippingAddress: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        type: String,
        required: true,
        default: "Pending"
        // Pending (have not paid), Paid and Cancelled.
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Order', orderModel);


