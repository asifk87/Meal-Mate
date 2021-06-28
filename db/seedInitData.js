// import seedDate
const grocerySData = require("./grocery-seeds.json");
const pantrySData = require("./pantry-seeds.json");
const recipeSData = require("./recipe-seeds.json");
// import models
const Grocery = require("../models/grocery-model");
const Pantry = require("../models/pantry-model");
const Recipe = require("../models/recipe-model");

// remove any preexisiting data and insert
Grocery.deleteMany({})
  .then(() => {
    return Grocery.insertMany(grocerySData);
    // going to try and see if we can return multi seed data
    // return Pantry.insertMany(pantrySData)
    // return Recipe.insertMany(recipeSData)
  })
  .then(console.log)
  .catch(console.error);
Pantry.deleteMany({})
  .then(() => {
    return Pantry.insertMany(pantrySData);
  })
  .then(console.log)
  .catch(console.error);
Recipe.deleteMany({})
  .then(() => {
    return Recipe.insertMany(recipeSData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
