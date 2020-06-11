const Dog = require('../models/Dog')
const User = require('../models/User')

const dogData = require('./dogs')
const userData = require('./users')

Dog.deleteMany({})
.then(() => {
  Dog.create(dogData)
  .then(dogs => {
    console.log(dogs)
  })
  .catch(err => {
    console.log(err)
  })
})

User.deleteMany({})
.then(() => {
  User.create(userData)
  .then(users => {
    console.log(users)
  })
  .catch(err => {
    console.log(err)
  })
})
