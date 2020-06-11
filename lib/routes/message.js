const express = require('express')
const userController = require('../controllers/message')
const router = express.Router()

router.get('/message', userController.index)
router.get('/message', userController.create)
router.get('/message/:id', userController.edit)
router.get('/message/:id', userController.delete)

module.exports = router