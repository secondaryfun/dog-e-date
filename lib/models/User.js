const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 2
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  line1: {
    type: String
  },
  line2: {
    type: String
  },
  line3:{
    type: String
  },
  city: {
    type: String
  },
  state:{
    type: String
  },
  country: {
    type: String
  },
  zipCode: {
    type: String
  },
  dogs: [ mongoose.ObjectId ]
})

module.exports = mongoose.model('User', User)
