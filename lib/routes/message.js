const express = require('express')
const messageController = require('../controllers/message')
const router = express.Router()

router.get('/message', messageController.index)
router.post('/message', messageController.create)
router.put('/message/:id', messageController.edit)
router.delete('/message/:id', messageController.delete)

module.exports = router



