const User = require('../models/userModel');
const Cart = require('../models/cartModel');

const generateToken = require("../utils/generateToken");
const bcrypt = require ("bcryptjs");
const crypto = require ("crypto");
const asyncHandler = require('express-async-handler')

const Token = require('../models/resetTokenModel');
const sendEmail = require("../utils/sendEmail");

class UserController {

 //  [ POST - ROUTE: api/user/register ]
 registerUser = asyncHandler( async (req,res) => {
    const {name, userName, password, phoneNumber, gender, email} = req.body;
    console.log(req.body);
    const user = await User.findOne({ $or:[ {email}, {userName} ]});
    if (!user){
        var salt = await bcrypt.genSalt(10);
        var hashPassword = await  bcrypt.hash(password,salt);
        const newUser = await User.create({
            name,
            email,
            userName,
            phoneNumber,
            gender,
            password: hashPassword,
            roleUser: "customer"
        });
        if (newUser){
            await Cart.create({user: newUser._id, orderList: []});
            res.json({
                _id: newUser._id,
                name,
                email,
                userName,
                phoneNumber,
                gender,
                newUser: newUser.roleUser,              
            });
        }
        else {
            res.status(501);
            throw new Error('Fail to resister new user!');          
        }
    }
    else {
            res.status(404);
            throw new Error('User has already existed!');
    }
    
})

//  [ POST - ROUTE: api/user/auth ]
    authUser = asyncHandler( async (req,res) => {
        const {userName , password} = req.body;
        const user = await User.findOne({userName});
        if(user && (await user.matchPassword(password))){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                userName: user.userName,
                phoneNumber: user.phoneNumber,
                gender: user.gender,
                roleUser: user.roleUser,
                token: generateToken(user._id)
            });
        } else {
            res.status(401);
            throw new Error("Invalid UserName or Password");
        }
    })


 //  [ GET - ROUTE: api/user ]
    getUserProfile = asyncHandler( async (req,res) => {
        var user = await User.findById(req.user._id);
        if(user){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                userName: user.userName,
                phoneNumber: user.phoneNumber,
                gender: user.gender,
                roleUser: user.roleUser
            })
        }
        else {
            res.status(404);
            throw new Error('User does not exist!');
        }
    })

 //  [PATCH - ROUTE: api/user/update/]  
    updateUser = asyncHandler( async (req,res) => {
        var user = await User.findById(req.user._id);
        if (user){
            if(req.body.password) {
                var salt = await bcrypt.genSalt(10);
                var hashPassword = await  bcrypt.hash(req.body.password,salt);
                user.password = hashPassword;
            }
            var updateUser = await User.findOneAndUpdate({_id: req.params.id}, {
                name : req.body.name || user.name,
                userName : user.userName,
                email : req.body.email || user.email,
                phoneNumber : req.body.phoneNumber || user.phoneNumber,
                gender : req.body.gender || user.gender,
                roleUser : req.body.roleUser || user.roleUser,
                password : hashPassword,
                token: generateToken(user._id),
                },
                {
                    new : true
                });
            res.json(updateUser);
        }
        else {
            res.status(404);
            throw new Error('User does not exist!');
        }
    })

 //  [POST - ROUTE: api/user/sendResetEmail ]  
    sendResetMail = asyncHandler( async (req,res) => {
        var {email} = req.body;
        var user = await User.findOne({email: email}).lean();
        if (!user) {
            res.status(404);
            throw new Error('User does not exist!');
        }
        let tokenReset = await Token.findOne({ userId: user._id });
        if (!tokenReset) {
            tokenReset = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }
        const link = `${process.env.BASE_URL}/resetpassword/${user._id}/${tokenReset.token}`;
        await sendEmail(user.email, "Password reset", link);
        res.status(200);
        res.json({
            message: "Successfully sent reset email!"
        });
    })

 //  [POST - ROUTE: api/user/reset/:resetToken ]  
    resetPass = asyncHandler( async (req,res) => {
        var userId = req.params.resetToken;  
        var newPassword = req.body.newPassword;
        var token = await Token.findOne({userId});
        var user = await User.findById(token.userId).lean();

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await  bcrypt.hash(newPassword, salt);
        user.password = hashPassword;

        await User.updateOne({_id: userId},user);
        await token.delete();
        res.status(200);
        res.json({
            message: "Successfully reset password!"
        });
    })
}

module.exports = new UserController;