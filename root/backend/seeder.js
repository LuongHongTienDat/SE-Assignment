const db = require('./config/db');
const bcrypt = require ("bcryptjs");

const users = require('./data/user.js');
const categories = require('./data/category.js');
const dishes = require('./data/dish.js');

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
      await User.deleteMany();
      await Dish.deleteMany();
      await Category.deleteMany();
      await Cart.deleteMany();
      await Order.deleteMany();
      await ResetToken.deleteMany();


      const importedDishes = await Dish.insertMany(dishes);
      const importedCategories = await Category.insertMany(categories);

      users = await user.map( async (user) => {
          var salt = await bcrypt.genSalt(10);
          user.password = await  bcrypt.hash(password,salt);
      })
      const importedUsers = await User.insertMany(users);

      console.log("Sucessfully imported data in database!");
      process.exit();
    } catch (error) {
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