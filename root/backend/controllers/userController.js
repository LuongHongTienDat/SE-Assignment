const User = require('../models/userModel');
const generateToken = require("../utils/generateToken.js");
const bcrypt = require ("bcryptjs");

class UserController {

 //  [ POST - ROUTE: api/user/create ]
 async registerUser(req,res){
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
            roleUser: "Customer"
        });
        if (newUser){
            res.json({
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
    
}

//  [ POST - ROUTE:  ]
    async authUser(req,res){
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
    }


 //  [ GET - ROUTE:  ]
    async getUserProfile(req,res){
        var user = await User.findById(req.params.id);
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
    }

 //  [PATCH - ROUTE:  ]  
    async updateUser(req,res){
        console.log(req.params.id);
        var user = await User.findById(req.params.id);
        if (user){
            if(req.body.password) {
                var salt = await bcrypt.genSalt(10);
                var hashPassword = await  bcrypt.hash(req.body.password,salt);
                user.password = hashPassword;
            }
            var updateUser = await User.findOneAndUpdate({_id: req.params.id}, {
                name : req.body.name || user.name,
                userName : req.body.userName || user.userName,
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
        res.status(404)
        throw new Error('User does not exist!')
        }
    }
}

module.exports = new UserController;