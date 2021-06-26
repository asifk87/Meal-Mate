// imports
const express = require ('express')
const methodOverride = require('method-override')
const mealsController = require('./controllers/mealMapper')
const groceryController = require('./controllers/groceryController')
const pantryController = require('./controllers/pantryController')
const recipeController = require('./controllers/recipeController')


const ejsLayouts = require('express-ejs-layouts')
const Grocery = require('./models/grocery-model')
// initialize express + configure
const app = express ()
app.set('view engine','ejs')
// setting up public folder
app.use(ejsLayouts)
app.use(express.static(__dirname + '/public'))

//middlewear 
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
/* allows forms to post */
app.use(methodOverride('_method'))


// use routes
app.use(mealsController)
app.use(groceryController)
app.use(pantryController)
app.use(recipeController)


// listen port
app.set('port', process.env.PORT || 4000 )
app.listen( app.get('port'), () => console.log(`get porty on ${app.get('port')}`))