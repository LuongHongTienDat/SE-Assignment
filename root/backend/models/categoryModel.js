const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryModel = new Schema({
    cateName: {
        type: String,
        required: true,
        default: ""
    },
    image: {
        type: String,
        required: true,
        default: ""
    }
})

module.exports = mongoose.model('Category', categoryModel);


