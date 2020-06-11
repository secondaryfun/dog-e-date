const express = require('express')
const userController = require('../controllers/park')
const router = express.Router()

router.get('/parks', userController.index)
router.get('/parks', userController.create)
router.get('/parks/:id', userController.edit)
router.get('/parks/:id', userController.delete)

module.exports = router