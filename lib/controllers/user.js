const User = require('../models/User')

module.exports = {
  index: (req, res) => {
    User.find({})
    .then(user => {
      res.json(user)
    })
  },
  create: (req, res) => {
      let user = req.body
      User.create(user).then(user => res.json(user)).catch(error => console.log(error))
  },
  showUser: (req, res) => {
      User.find({username: req.params.name}).then(user => res.json(user))
  },
  edit: (req, res) => {
      let id = req.params.id
      User.findByIdAndUpdate(id, {$set: req.body}).then(user => res.json(user)).catch(error => console.log(error))
  },
  delete: (req, res) => {
      let id = req.params.id
      User.findByIdAndDelete(id).then(user => res.json(user)).catch(error => console.log(error))
  }
};
