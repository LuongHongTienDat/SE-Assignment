const db = require('./config/db');
const bcrypt = require ("bcryptjs");

var users = require('./data/user.js');
var categories = require('./data/category.js');
var dishes = require('./data/dish.js');

const User = require('./models/userModel');
const Dish = require('./models/dishModel');
const Category = require('./models/categoryModel');
const Cart = require('./models/cartModel');
const Order = require('./models/orderModel');
const ResetToken = require('./models/resetTokenModel');

// For .env access
require("dotenv").config();

// Connect to DB
db.connect();


const importData = async () => {
    try {
      const newUsers = await Promise.all(users.map(async (user) => {
          var salt = await bcrypt.genSalt(10);
          user.password = await  bcrypt.hash(user.password,salt);
          return user;
        }));

      await User.deleteMany();
      await Dish.deleteMany();
      await Category.deleteMany();
      await Cart.deleteMany();
      await Order.deleteMany();
      await ResetToken.deleteMany();


      const importedCategories = await Category.insertMany(categories);
      const importedDishes = await Dish.insertMany(dishes);
      const importedUsers = await User.insertMany(newUsers);
      

      // Create carts for customer accounts
      var customers = await Promise.all(importedUsers.filter(
          e => e.roleUser == "customer"
      ));
      var carts = await Promise.all(customers.map(async (customer) => {
        return {user: customer._id, orderList:[]};
      }));
      await Cart.insertMany(carts);

      console.log("Sucessfully imported data in database!");
      process.exit();
    }
    catch (error) {
      console.error(`${error}`);
      process.exit(1);
    }
};
const destroyData = async () => {
    try {
      await User.deleteMany();
      await Dish.deleteMany();
      await Category.deleteMany();
      await Cart.deleteMany();
      await Order.deleteMany();
      await ResetToken.deleteMany();
      console.log("Sucessfully destroyed data in database!");
      process.exit();
    } catch (error) {
      console.error(`${error}`);
      process.exit(1);
    }
  }
  
  if(process.argv[2] === '-d'){
      destroyData()
  } else {
      importData()
  }