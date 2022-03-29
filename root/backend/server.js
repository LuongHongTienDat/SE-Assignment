const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./config/db');
const routes = require('./routes');
const errorHandleMiddlewares = require('./middlewares/errorHandleMiddlewares');

// For .env access
require("dotenv").config();

// Connect to DB
db.connect();

// Check mode
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// To recognize the incoming Request Object as a JSON Object
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Successfully running !");
});

// Route 
routes(app);

app.use(errorHandleMiddlewares.errorHandler);

app.listen(port, () => {
    console.log(`App listening at port: ${port}`)
})