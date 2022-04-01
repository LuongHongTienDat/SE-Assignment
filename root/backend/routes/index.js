const dishRouter = require('./dishRoutes');
const userRouter = require('./userRoutes');
const cartRouter = require('./cartRoutes');
const orderRouter = require('./orderRoutes');

function routes(app){
    app.use('/api/dish', dishRouter);
    app.use('/api/user', userRouter);
    app.use('/api/cart', cartRouter);
    app.use('/api/order', orderRouter);

}

module.exports = routes;
