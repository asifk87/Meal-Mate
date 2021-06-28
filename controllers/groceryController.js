const express = require("express");
const router = express.Router();
const Grocery = require("../models/grocery-model");

//Show Groceries Route
router.get("/groceries", (req, res) => {
  //   console.log("home route hit");
  // res.send('First Home Page')
  Grocery.find({})
    .then((groceries) => {
      // console.log(groceries);
      // res.send(groceries)
      res.render("groceries", { groceries });
    })
    .catch(console.error);
});
// Show indivual grocery
router.get("/groceries/:id", (req, res) => {
  // res.send('grocery id route ')
  // console.log(`grocery id route hit`);
  const id = req.params.id;
  Grocery.findById(id).then((grocery) => {
    res.render("./show/showGrocery.ejs", { grocery });
  });
});

// C for Create route
router.post("/groceries", (req, res) => {
  // console.log(req.body);
  Grocery.create(req.body)
    .then((result) => {
      res.redirect("/groceries");
      res.send(`Sucess ${result}`);
    })
    .catch((error) => {
      console.log(error);
      res.send(`this didn't work buddy`);
    });
});

// Update Route (get info route)
router.get("/groceries/:id/edit", (req, res) => {
  // console.log("Grocery edit route hit");
  // res.send('edit Grocery Route')
  const routeID = req.params.id;
  Grocery.findById(routeID).then((grocery) => {
    // console.log(grocery);
    res.render("./edit/editGrocery.ejs", { grocery });
  });
  // res.render('./create/newGrocery')
});
// edit route  replace with info
router.put("/groceries/:id/", (req, res) => {
  // console.log("Grocery POST EDIT route hit");
  // res.send('edit Grocery Route')
  const id = req.params.id;
  Grocery.findOneAndUpdate(
    { _id: id },
    {
      item: req.body.item,
      complete: req.body.complete == "on",
    },
    { new: true }
  ).then(() => {
    res.redirect("/groceries");
  });
});

// Delete route
router.delete("/groceries/:id", (req, res) => {
  // res.send(`you're in the grocery delete section`)
  // console.log(`You hit the grocery delete route`);
  const id = req.params.id;
  Grocery.findByIdAndDelete({ _id: id }).then((result) => {
    // console.log(result);
    res.redirect("/groceries");
  });
});

// export
module.exports = router;
