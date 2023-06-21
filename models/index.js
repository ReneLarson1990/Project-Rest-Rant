require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false, // added to fix an issue with mongoose
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')
