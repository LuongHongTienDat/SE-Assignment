const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewModel = new Schema({
    nameOfDish: {type: String, required: true},
    comment: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
});

const dishModel = new Schema({
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
        default: ""
    },
    category:{
        type: String,
        required: true,
        ref: "Category"
    },
    dishDescription:{
        type: String,
        required: true, 
        default: ""
    },
    dishDetails:{
        type: String,
        required: true, 
        default: ""
    },
    price:{
        type: Number,
        required: true, 
        default: 0
    },    
    countRating:{
        type: Number,
        required: true, 
        default: 0
    },   
    rating:{
        type: Number,
        required: true, 
        default: 0
    },
    numReviews:{
        type: Number,
        required: true, 
        default: 0
    },
    reviews:{
        type: [reviewModel],
        required: true, 
        default: []
    },
    countInStock:{
        type: Number,
        required: true,
        default: 0
    },
    isBestSeller:{
        type: Boolean,
        required: true,
        default: false
    }   
}, {
    timestamps: true,
})

module.exports = mongoose.model('Dish',dishModel);


