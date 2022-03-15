const mongoose = require('mongoose');


async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/restaurant',{
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });
        console.log('successfully connected');
    }
    catch (error) {
        console.log('fail');
    }
}

module.exports = {connect};