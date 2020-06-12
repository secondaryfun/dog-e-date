const express = require('express')
const dogController = require('../controllers/dog')
const router = express.Router()


router.get('/', dogController.index)
router.get('/:id', dogController.showDog)
router.post('/', dogController.create)
router.put('/:id', dogController.edit)
router.delete('/:id', dogController.delete)
router.get('/likes/:id', dogController.findByLikes)
router.get('/ignores/:id', dogController.findByIgnores)
router.put('/likes/:id', userController.addLike)
router.put('/ignores/:id', userController.addIgnore)



module.exports = router
