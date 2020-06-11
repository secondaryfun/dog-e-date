const express = require('express')
const router = express.Router()
const dogController = require('../controllers/dog')


router.get('/dog', dogController.index)
router.post('/dog/', dogController.create)
router.put('/dog/name/:name', dogController.edit)
router.delete('/dog/name/:name', dogController.delete)


module.exports = router
