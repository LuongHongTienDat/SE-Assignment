const mongoose = require('mongoose');


async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_STRING,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });
        console.log('successfully connected');
    }
    catch (error) {
        console.log('fail to connect to database');
    }
}

module.exports = {connect};