const dishRouter = require('./dishRoutes');
const userRouter = require('./userRoutes');

function routes(app){
    app.use('/api/dish', dishRouter);
    app.use('/api/user', userRouter);

}

module.exports = routes;
