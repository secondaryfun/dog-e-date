const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Park = new Schema({
  name: String,
  address: new Schema({
    line1: String,
    line2: String,
    line3: String,
    city: String,
    state: String,
    country: String,
    zipCode: Number
  })
})

module.exports = mongoose.model('Park', Park)