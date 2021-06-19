const mongoose = require('../db/connection')

const RecipeSchema = new mongoose.Schema(
    {
        title: String,
        serving: Number,
        ingredients: [String],
        instruction: String,
        img: String,
        complete: {type: Boolean, default: false}
    }
)

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe