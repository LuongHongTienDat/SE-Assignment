const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryModel = new Schema({
    cateName: {
        type: String,
        required: true,
    },
    cateID: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        required: true,
        default: ""
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Category', categoryModel);


