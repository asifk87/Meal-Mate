const mongoose = require("../db/connection");

const GrocerySchema = new mongoose.Schema({
  item: String,
  complete: { type: Boolean, default: false },
});

const Grocery = mongoose.model("Grocery", GrocerySchema);

module.exports = Grocery;
