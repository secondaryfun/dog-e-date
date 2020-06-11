const express = require('express')
const dogController = require('../controllers/dog')
const router = express.Router()

router.get('/dogs', dogController.index)
router.get('/dogs', dogController.create)
router.get('/dogs/:id', dogController.edit)
router.get('/dogs/:id', dogController.delete)

module.exports = router
