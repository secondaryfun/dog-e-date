const express = require('express')
const userController = require('../controllers/user')
const router = express.Router()

router.get('/user', userController.index)
router.get('/user/:name', userController.showUser)
router.post('/user', userController.create)
router.put('/user/:id', userController.edit)
router.delete('/user/:id', userController.delete)



module.exports = router
