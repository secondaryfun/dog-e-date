const express = require('express')
const dogController = require('../controllers/dog')
const router = express.Router()


router.get('/dog', dogController.index)
router.post('/dog', dogController.create)
router.put('/dog/:id', dogController.edit)
router.delete('/dog/:id', dogController.delete)


module.exports = router
