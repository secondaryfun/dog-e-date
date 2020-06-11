const express = require('express')
const userController = require('../controllers/user')
const router = express.Router()

router.get('/users', userController.index)
router.get('/users', userController.create)
router.get('/users/:id', userController.edit)
router.get('/users/:id', userController.delete)

module.exports = router
