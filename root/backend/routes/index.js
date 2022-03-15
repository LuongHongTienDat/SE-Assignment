const dishRouter = require('./dishRoutes');

function routes(app){
    app.use('/api/dish', dishRouter);

}

module.exports = routes;
