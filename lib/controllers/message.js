const Message = require('../models/Message')

module.exports = {
    delete: (req, res) => {
        let id = req.params.id
        Message.findByIdAndDelete(id).then(message => res.json(message)).catch(error => console.log(error))
    },
    create: (req, res) => {
        let movie = req.body
        Message.create(message).then(message => res.json(message)).catch(error => console.log(error))
    },
    edit: (req, res) => {
        let id = req.params.id
        Message.findByIdAndUpdate(id, {$set: req.body}).then(message => res.json(message)).catch(error => console.log(error))
    },
    index: (req, res) => {
        Message.find({}).then(data => res.json(data))
    }
}