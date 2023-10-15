require('dotenv').config()
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')
