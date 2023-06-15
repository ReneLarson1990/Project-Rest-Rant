const router = require('express').Router()
const db = require('../models')
const mongoose = require("mongoose")

router.get('/', async (req, res, next) => {
  try {
    const places = await db.Place.find()
    res.render('places/index', { places })
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await db.Place.create(req.body)
    res.redirect('/places')
  } catch (err) {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (let field in err.errors) {
        message += `${field} was ${err.errors[field].value}. `
        message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', { message })
    } else {
      next(err)
    }
  }
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = req.params.id;
  db.Place.findById(id)
  .populate('comments')
  .then((place) => {
    console.log(place.comments)
    if (!place) {
      res.render('error404');
    } else {
      res.render('places/show', {place});
    }
  })
  .catch((err) => {
    console.log(err);
    res.render('error404');
  });
});




router.put('/:id', async (req, res, next) => {
  try {
    await db.Place.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/places/${req.params.id}`)
  } catch (err) {
    next(err)
  }
})



router.delete('/:id', async (req, res, next) => {
  try {
    await db.Place.findByIdAndDelete(req.params.id)
    res.redirect('/places')
  } catch (err) {
    next(err)
  }
})


router.get('/:id/edit', async (req, res, next) => {
  try {
    const place = await db.Place.findById(req.params.id)
    res.render('places/edit', { place })
  } catch (err) {
    next(err)
  }
})



//rant area

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
