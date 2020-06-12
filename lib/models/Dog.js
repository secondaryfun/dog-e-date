const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Dog = new Schema({
  name: {
    type: String,
    required: true
  },
  parent: {
    type: String,
  },
  breed: {
    type: String,
  },
  info: {
    type: String,
  },
  age: {
    type: Number,
  },
  size: {
    type: String,
    enum: ["S", "M", "L", "XL"]
  },
  likes: [String],
  ignores: [String],
  image: String
})

module.exports = mongoose.model('Dog', Dog)
