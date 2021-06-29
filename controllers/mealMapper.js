const express = require("express");
const router = express.Router();

// import models
const Recipe = require("../models/recipe-model");

// Main route
router.get("/", (req, res) => {
  //   console.log("home route hit");
  // res.send('First Home Page')
  Recipe.find({})
    .then((recipes) => {
      //   console.log(recipes);
      // res.send(groceries)
      res.render("index", { recipes });
    })
    .catch(console.error);
});
// search query
router.post("/", (req, res) => {
  // console.log(req.body);
  // console.log(req.body.ingredients);
  // adding space infront of array because ingd have spaces infront of them to look nice.
  let search = ( " " + req.body.ingredients)
  // console.log(search);
  Recipe.find({ ingredients: search })
    .then((recipes) => {
      //   console.log(recipes);
      res.render("index", { recipes });
    })
    // .then(console.log)
    .catch(console.error);
});

// export
module.exports = router;
