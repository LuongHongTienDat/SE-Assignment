const dishRouter = require('./dishRoutes');
const userRouter = require('./userRoutes');
const cartRouter = require('./cartRoutes');

function routes(app){
    app.use('/api/dish', dishRouter);
    app.use('/api/user', userRouter);
    app.use('/api/cart', cartRouter);

}

module.exports = routes;
