const express = require ('express')
const router = express.Router()

const Recipe = require('../models/recipe-model')

router.get('/recipes', (req,res) => {
    console.log('home route hit');
    // res.send('First Home Page')
    Recipe.find({})
        .then(recipes => {
            console.log(recipes);
            // res.send(groceries)
        res.render('recipes', {recipes})
        })
        .catch(console.error)
})


module.exports = router