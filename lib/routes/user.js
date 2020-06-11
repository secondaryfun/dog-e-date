const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')


router.get('/user', userController.index)
router.post('/user/', userController.create)
router.put('/user/name/:name', userController.edit)
router.delete('/user/name/:name', userController.delete)


module.exports = router
