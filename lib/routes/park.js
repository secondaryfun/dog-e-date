const express = require('express')
const parkController = require('../controllers/park')
const router = express.Router()

router.get('/', parkController.index)
router.post('/', parkController.create)
router.put('/:id', parkController.edit)
router.delete('/:id', parkController.delete)

module.exports = router
