const express = require('express')
const router = express.Router()

router.use('/user', require('./user'))
router.use('/dog', require('./dog'))
router.use('/park', require('./park'))
router.use('/message', require('./message'))

module.exports = router
