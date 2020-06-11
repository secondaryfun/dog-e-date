const Dog = require('../models/Dog')

module.exports = {
  index: (req, res) => {
    Dog.find({})
    .then(dog => {
      res.json(dog)
    })
  },
  create: (req, res) => {
    Dog.create(req.body)
    .then(dog => {
      res.json(dog)
    })
  },
  edit: (req, res) => {
    Dog.findOneAndUpdate({name: req.params.name}, req.body)
    .then(dog => {
      res.json(dog)
    })
  },
  delete: (req, res) => {
    Dog.findOneAndDelete({name: req.params.name})
    .then(dog => {
      res.json(dog)
    })
  }
};
