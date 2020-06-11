const User = require('../models/User')

module.exports = {
    delete: (req, res) => {
        let id = req.params.id
        User.findByIdAndDelete(id).then(user => res.json(user)).catch(error => console.log(error))
    },
    create: (req, res) => {
        let movie = req.body
        User.create(user).then(user => res.json(user)).catch(error => console.log(error))
    },
    edit: (req, res) => {
        let id = req.params.id
        User.findByIdAndUpdate(id, {$set: req.body}).then(user => res.json(user)).catch(error => console.log(error))
    },
    index: (req, res) => {
        User.find({}).then(data => res.json(data))
    }
}
