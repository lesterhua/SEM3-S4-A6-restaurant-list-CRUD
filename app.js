// require data
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Restaurant = require("./models/restaurant");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const port = 2800;

//connection MongoDB
mongoose.connect("mongodb://127.0.0.1/restaurant", { useNewUrlParser: true });

//setting express engine into handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//use body-parse on express
app.use(bodyParser.urlencoded({ extended: true }));

//use static files
app.use(express.static("public"));

//Assign Mongoose to db
const db = mongoose.connection;

// db connecting confirm if error
db.on("error", () => {
  console.log("mongodb error");
});

// db connecting confirm if success
db.once("open", () => {
  console.log("mongodb connected!");
});

//route setting for index page
app.get("/", (req, res) => {
  //use Model find to get MongoDB to controller
  Restaurant.find((err, restaurant) => {
    if (err) return console.error(err);
    return res.render("index", { restaurants: restaurant });
  });
});

//starting and listen web server
app.listen(port, () => {
  console.log(`Express app is running on : http://localhost:${port}`);
});
