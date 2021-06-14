const express = require ('express')
const router = express.Router()

// import models
const Grocery = require('../models/grocery-model')
const Pantry = require('../models/pantry-model')
const Recipe = require('../models/recipe-model')


router.get('/', (req,res) => {
    console.log('home route hit');
    // res.send('First Home Page')
    Grocery.find({})
        .then(groceries => {
            console.log(groceries);
            // res.send(groceries)
        res.render('index.ejs', {groceries})
        })    

})


// export 
module.exports = router