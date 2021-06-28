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
// New Recipe Form Route
router.get('/recipe/new', (req,res) => {
    // res.send(`You're on the new form route`)
    res.render('./show/newRecipe.ejs')
})
// Show indivual grocery 
router.get('/recipe/:id', (req,res) => {
    // res.send('recipe id route')
    console.log(`recipe id route hit`)
    const id = req.params.id
    Recipe.findById(id)
        .then(recipe => {
            res.render('./show/showRecipe.ejs', {recipe})
        })
})
// Have to move the recipe/new above recipe/:id so that it could show
// C for Create Route
router.post('/recipes', (req,res) => {
    console.log(req.body.title);
    console.log(req.body.serving);
    console.log(req.body.ingredients);
    console.log(req.body.instruction);
    console.log(req.body.img);
    let ind = req.body.ingredients;
    let indIngredients = ind.split(',')
    console.log(indIngredients);
    Recipe.create ( {
        title: req.body.title,
        serving: req.body.serving,
        ingredients: indIngredients,
        instruction: req.body.instruction,
        img: req.body.img
    })
    .then(result => {
        // res.send(result)
        console.log(result);
        res.redirect('/recipes')
    })
    .catch(error => console.log(error))
})

// Update Route (get info route)
router.get('/recipe/:id/edit', (req,res) => {
    console.log('Recipe Edit Route Hit');
    // res.send('recipe edit route hit')
    const routeID = req.params.id
    Recipe.findById(routeID)
        .then(recipe => {
            console.log(recipe);
            res.render('./edit/editRecipe.ejs', {recipe})
        })
})
//edit route replaces old info with new
router.put('/recipe/:id',(req,res) => {
    const id = req.params.id
    let ind = req.body.ingredients;
    let indIngredients = ind.split(',')
    Recipe.findByIdAndUpdate(
        {_id: id},
        { 
            title: req.body.title,
            serving: req.body.serving,
            ingredients: indIngredients,
            instruction: req.body.instruction,
            img: req.body.img
        },
        {new:true}
    )
        .then( () => {
            res.redirect(`/recipe/${id}`)
        })
    })
// Delete route
router.delete('/recipe/:id', (req,res) => {
    // res.send('youre in the recipe delete route')
    console.log(`You hit the recipe delete route`);
    const id = req.params.id;
    Recipe.findByIdAndDelete(
        {_id: id}
    )
    .then(result => {
        console.log(result);
        res.redirect('/recipes')
    })
})

    
// export module
module.exports = router