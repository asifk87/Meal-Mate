const express = require ('express')
const router = express.Router()

// import models
const Grocery = require('../models/grocery-model')
const Pantry = require('../models/pantry-model')
const Recipe = require('../models/recipe-model')



// Main route
router.get('/', (req,res) => {
    console.log('home route hit');
    // res.send('First Home Page')
    Recipe.find({})
        .then(recipes => {
            console.log(recipes);
            // res.send(groceries)
        res.render('index', {recipes})
        })
        .catch(console.error)
})




// //Grocery Route
// router.get('/groceries', (req,res) => {
//     console.log('home route hit');
//     // res.send('First Home Page')
//     Grocery.find({})
//         .then(groceries => {
//             console.log(groceries);
//             // res.send(groceries)
//         res.render('groceries', {groceries})
//         })
//         .catch(console.error)
// })
//Pantry Route
// router.get('/pantry', (req,res) => {
//     console.log('home route hit');
//     // res.send('First Home Page')
//     Pantry.find({})
//         .then(pantries => {
//             console.log(pantries);
//             // res.send(groceries)
//         res.render('pantry', {pantries})
//         })
//         .catch(console.error)
// })
//Recipe Route
// router.get('/recipes', (req,res) => {
//     console.log('home route hit');
//     // res.send('First Home Page')
//     Recipe.find({})
//         .then(recipes => {
//             console.log(recipes);
//             // res.send(groceries)
//         res.render('recipes', {recipes})
//         })
//         .catch(console.error)
// })
// // C for Create route
// router.get('/groceries/new', (req,res) => {
//     // console.log('home route hit');
//     // res.send('newGrocery Route')
//     res.render('./create/newGrocery')
// })
// router.post('/groceries', (req,res) => {
//     console.log(`this is the grocery create route form data:${req.body}`);
// })

// export 
module.exports = router