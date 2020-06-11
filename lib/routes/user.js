const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')


router.get('/user', userController.index)
router.get('user/firstName/:name', userController.showName)
router.post('/user/', userController.create)
router.put('/user/firstName/:name', userController.edit)
router.delete('/user/firstName/:name', userController.delete)


module.exports = router
