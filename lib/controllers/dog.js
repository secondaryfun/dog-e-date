const Dog = require('../models/Dog')

module.exports = {
  index: (req, res) => {
    Dog.find({})
      .then(dog => {
        res.json(dog)
      })
  },
  showDog: (req, res) => {
    Dog.find({ id: req.params.id })
      .then(dog => {
        res.json(dog)
      }).catch(error => console.log(error))
  },
  create: (req, res) => {
    let dog = req.body
    Dog.create(dog).then(dog => res.json(dog)).catch(error => console.log(error))
  },
  edit: (req, res) => {
    let id = req.params.id
    Dog.findByIdAndUpdate(id, { $set: req.body }).then(dog => res.json(dog)).catch(error => console.log(error))
  },

  delete: (req, res) => {
    let id = req.params.id
    Dog.findByIdAndDelete(id).then(dog => res.json(dog)).catch(error => console.log(error))
  },
  findByLikes: (req, res) => {
    Dog.find({ likes: req.params.id })
      .then(dog => res.json(dog))
      .catch(error => console.log(error))
  },
  findByIgnores: (req, res) => {
    Dog.find({ ignores: req.params.id })
      .then(dog => res.json(dog))
      .catch(error => console.log(error))
  },
}
