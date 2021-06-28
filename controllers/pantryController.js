const express = require("express");
const router = express.Router();

const Pantry = require("../models/pantry-model");

//Show Pantry Route
router.get("/pantry", (req, res) => {
  //   console.log("home route hit");
  // res.send('First Home Page')
  Pantry.find({})
    .then((pantries) => {
      //   console.log(pantries);
      // res.send(groceries)
      res.render("pantry", { pantries });
    })
    .catch(console.error);
});
// Show indvidual pantry item
router.get("/pantry/:id", (req, res) => {
  //   console.log(`Pantry ID route hit`);
  const id = req.params.id;
  Pantry.findById(id)
    .then((pantry) => {
      res.render("./show/showPantry.ejs", { pantry });
    })
    .catch((err) => {
      console.log(err);
    });
});
// start here
// C for Create route
router.post("/pantry", (req, res) => {
  //   console.log(req.body);
  Pantry.create(req.body)
    .then((result) => {
      res.redirect("/pantry");
      res.send(`Sucess ${result}`);
    })
    .catch((error) => {
      console.log(error);
      res.send(`this didn't work buddy`);
    });
});

// Update Route (get info route)
router.get("/pantry/:id/edit", (req, res) => {
  //   console.log("Pantry edit route hit");
  // res.send('edit Grocery Route')
  const routeID = req.params.id;
  Pantry.findById(routeID).then((pantry) => {
    // console.log(pantry);
    res.render("./edit/editPantry.ejs", { pantry });
  });
  // res.render('./create/newGrocery')
});
// edit route  replace with info
router.put("/pantry/:id/", (req, res) => {
  //   console.log("Pantry POST EDIT route hit");
  // res.send('edit Grocery Route')
  const id = req.params.id;
  Pantry.findOneAndUpdate(
    { _id: id },
    {
      item: req.body.item,
      complete: req.body.complete == "on",
    },
    { new: true }
  ).then(() => {
    res.redirect("/pantry");
  });
});

// Delete route
router.delete("/pantry/:id", (req, res) => {
  // res.send(`you're in the grocery delete section`)
  //   console.log(`You hit the pantry delete route`);
  const id = req.params.id;
  Pantry.findByIdAndDelete({ _id: id }).then((result) => {
    // console.log(result);
    res.redirect("/pantry");
  });
});

module.exports = router;
