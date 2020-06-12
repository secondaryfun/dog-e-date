const express = require('express')
const messageController = require('../controllers/message')
const router = express.Router()

router.get('/', messageController.index)
router.post('/', messageController.create)
router.put('/:id', messageController.edit)
router.delete('/:id', messageController.delete)

module.exports = router
