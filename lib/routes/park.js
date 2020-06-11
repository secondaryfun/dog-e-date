const express = require('express')
const parkController = require('../controllers/park')
const router = express.Router()

router.get('/park', parkController.index)
router.get('/park', parkController.create)
router.get('/park/:id', parkController.edit)
router.get('/park/:id', parkController.delete)

module.exports = router