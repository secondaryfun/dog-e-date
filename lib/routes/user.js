const express = require('express')
const userController = require('../controllers/user')
const router = express.Router()

router.get('/', userController.index)
router.get('/:name', userController.showUser)
router.post('/', userController.create)
router.put('/:id', userController.edit)
router.put('/likes/:id', userController.addLike)
router.put('/ignores/:id', userController.addIgnore)
router.delete('/:id', userController.delete)

module.exports = router
