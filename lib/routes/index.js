const express = require('express')
const router = express.Router()

router.use(require('./user'))
router.use(require('./dog'))
router.use(require('./park'))
router.use(require('./message'))

module.exports = router
