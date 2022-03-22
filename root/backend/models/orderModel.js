const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderObj = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
    },
    name: {
        type: String,
        required: true,
        default: ""
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    default: []
})

const paymentResultObj = new Object({
    //
})

const orderModel = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    orderList: [{ orderObj }],
    ShippingAddress: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: { paymentResultObj },
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Order', orderModel);


