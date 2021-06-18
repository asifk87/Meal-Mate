const express = require ('express')
const router = express.Router()

const Recipe = require('../models/recipe-model')

// Show Recipe Route
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
// Show indivual grocery 
router.get('/recipes/:id', (req,res) => {
    // res.send('recipe id route')
    console.log(`recipe id route hit`)
    const id = req.params.id
    Recipe.findById(id)
        .then(recipe => {
            res.render('./show/showRecipe.ejs', {recipe})
        })
})
// New Recipe Form Route
router.get('/recipe/new', (req,res) => {
    // res.send(`You're on the new form route`)
    res.render('./show/newRecipe.ejs')
})
// C for Create Route
router.post('/recipes', (req,res) => {
    console.log(req.body);
    Recipe.create(req.body)
        .then(result => {
            res.redirect('/recipes')
            res.send(`Sucess ${result}`)
        })
        .catch(error => {
            console.log(error);
            res.send(`Thsi didn't work buddy`)
        })
})
module.exports = router