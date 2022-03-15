const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const db = require('./config/db');
const routes = require('./routes');

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

app.get("/", (req, res) => {
  res.send("Successfully running !");
});

// Route 
routes(app);

app.listen(port, () => {
    console.log(`App listening at port: ${port}`)
})