const express = require('express')
const parkController = require('../controllers/park')
const router = express.Router()

router.get('/park', parkController.index)
router.post('/park', parkController.create)
router.put('/park/:id', parkController.edit)
router.delete('/park/:id', parkController.delete)

module.exports = router
