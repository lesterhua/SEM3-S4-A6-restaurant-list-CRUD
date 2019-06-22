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

//route setting for search bar
app.get("/search", (req, res) => {
  console.log("req.query.keyword", req.query.keyword);
  const keyword = req.query.keyword;
  Restaurant.find((err, restaurant) => {
    if (err) return console.error(err);

    const searchResult = restaurant.filter(({ name, category }) => {
      return (
        name.toLowerCase().includes(keyword.toLowerCase()) ||
        category.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    return res.render("index", { restaurants: searchResult, keyword: keyword });
  });
});

//create new page
app.get("/restaurant/new", (req, res) => {
  res.render("create");
});

// create new action
app.post("/restaurant", (req, res) => {
  console.log("req.body", req.body);
  const restaurant = new Restaurant({
    name: req.body.name,
    name_en: req.body.name_en,
    category: req.body.category,
    rating: req.body.rating,
    image: req.body.image,
    phone: req.body.phone,
    location: req.body.location,
    google_map: req.body.google_map,
    description: req.body.description
  });
  restaurant.save(function(err) {
    if (err) return console.error(err);
    return res.redirect("/");
  });
});

//detail page
app.get("/restaurant/:id", (req, res) => {
  console.log("req.params.id", req.params.id);
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err);
    return res.render("show", { restaurant: restaurant });
  });
});

//edit page
app.get("/restaurant/:id/edit", (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err);
    return res.render("edit", { restaurant: restaurant });
  });
});

//edit action
app.post("/restaurant/:id", (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err);
    (restaurant.name = req.body.name),
      (restaurant.name_en = req.body.name_en),
      (restaurant.category = req.body.category),
      (restaurant.rating = req.body.rating),
      (restaurant.image = req.body.image),
      (restaurant.phone = req.body.phone),
      (restaurant.location = req.body.location),
      (restaurant.google_map = req.body.google_map),
      (restaurant.description = req.body.description);

    restaurant.save(function(err) {
      if (err) return console.error(err);
      return res.redirect(`/restaurant/${req.params.id}`);
    });
  });
});

//delete action
app.post("/restaurant/:id/delete", (req, res) => {
  res.send("刪除一個");
});

//starting and listen web server
app.listen(port, () => {
  console.log(`Express app is running on : http://localhost:${port}`);
});
