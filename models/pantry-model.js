const mongoose = require('../db/connection')

const PantrySchema = new mongoose.Schema(
    {
        item: String,
        complete: {type: Boolean, default: false}
    }
)

const Pantry = mongoose.model('Pantry', PantrySchema)

module.exports = Pantry
