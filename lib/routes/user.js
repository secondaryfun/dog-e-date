const express = require('express')
const userController = require('../controllers/user')
const router = express.Router()

router.get('/user', userController.index)
router.post('/user', userController.create)
router.put('/user/:id', userController.edit)
router.delete('/user/:id', userController.delete)

/*
router.get('/user', userController.index)
router.post('/user/', userController.create)
router.put('/user/name/:name', userController.edit)
router.delete('/user/name/:name', userController.delete)
*/

module.exports = router
