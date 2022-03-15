const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    name:{
        type:string,
        require:true,
        default:""
    },
    email:{
        type:String,
        require:true,
    },
    userName:{
        type:String,
        require:true,
    },
    phoneNumber:{
        type:Number,
        require:true 
    },
    gender:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    roleUser:{
        type:String,
        require:true
    },

});

module.exports = mongoose.model('User', userModel);