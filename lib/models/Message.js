const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Message = new Schema({
  text: String,
  to: String,
  from: String
})

module.exports = mongoose.model('Message', Message)