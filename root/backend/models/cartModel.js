const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartModel = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
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
});

module.exports = mongoose.model('Cart', cartModel);