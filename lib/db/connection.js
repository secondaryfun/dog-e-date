const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/dog-e-date', { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose
