const User = require('../models/User')

module.exports = {
  index: (req, res) => {
    User.find({})
    .then(user => {
      res.json(user)
    })
  },
  create: (req, res) => {
    User.create(req.body)
    .then(user => {
      res.json(user)
    })
  },
  edit: (req, res) => {
    User.findOneAndUpdate({name: req.params.name}, req.body)
    .then(user => {
      res.json(user)
    })
  },
  delete: (req, res) => {
    User.findOneAndDelete({name: req.params.name})
    .then(user => {
      res.json(user)
    })
  }
};
