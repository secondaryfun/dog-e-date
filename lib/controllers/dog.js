const Dog = require('../models/Dog')

module.exports = {
    delete: (req, res) => {
        let id = req.params.id
        Dog.findByIdAndDelete(id).then(dog => res.json(dog)).catch(error => console.log(error))
    },
    create: (req, res) => {
        let movie = req.body
        Dog.create(dog).then(dog => res.json(dog)).catch(error => console.log(error))
    },
    edit: (req, res) => {
        let id = req.params.id
        Dog.findByIdAndUpdate(id, {$set: req.body}).then(dog => res.json(dog)).catch(error => console.log(error))
    },
    index: (req, res) => {
        Dog.find({}).then(data => res.json(data))
    }
}

