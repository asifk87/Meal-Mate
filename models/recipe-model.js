const mongoose = require('../db/connection')

const RecipeSchema = new mongoose.Schema(
    {
        title: String,
        serving: Number,
        ingrediants: [String],
        complete: {type: Boolean, default: false}
    }
)

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe