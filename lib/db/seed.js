const Dog = require('../models/Dog')
const dogData = require('./dogs')

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
