// imports
const express = require ('express')
const mealsController = require('./controllers/mealMapper')

// initialize express + configure
const app = express ()
app.set('view engine','ejs')

//middlewear 
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
/* allows forms to post */
// app.use(methodOverride('_method'))


// use routes
app.use(mealsController)


// listen port
app.set('port', process.env.PORT || 4000 )
app.listen( app.get('port'), () => console.log(`get porty on ${app.get('port')}`))