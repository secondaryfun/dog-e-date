const Park = require('../models/Park')

module.exports = {
    delete: (req, res) => {
        let id = req.params.id
        Park.findByIdAndDelete(id).then(park => res.json(park)).catch(error => console.log(error))
    },
    create: (req, res) => {
        let movie = req.body
        Park.create(park).then(park => res.json(park)).catch(error => console.log(error))
    },
    edit: (req, res) => {
        let id = req.params.id
        Park.findByIdAndUpdate(id, {$set: req.body}).then(park => res.json(park)).catch(error => console.log(error))
    },
    index: (req, res) => {
        Park.find({}).then(data => res.json(data))
    }
}