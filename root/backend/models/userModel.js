const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require ("bcryptjs");

const userModel = new Schema({
    name:{
        type: String,
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

userModel.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
  
module.exports = mongoose.model('User', userModel);