require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

// bonus i added 

app.get('/places/new', (req, res) => {
  res.render('Create')
})

app.get('/places/:id', (req, res) => {
  res.render('Details')
})

app.get('/places/:id/edit', (req, res) => {
  res.render('Edit')
})

// End of bonus 

app.get('*', (req,res) => {
  res.render('error404')
})

app.listen(process.env.PORT)
