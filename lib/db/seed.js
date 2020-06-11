let Dog = require("../models/Dog")
let User = require("../models/User")

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
