const Router = require('express')
const router = new Router()
const postController = require('../controllers/postController')

router.post('/', postController.create)
router.get('/', postController.getAll)
router.delete('/:id', postController.deleteOne)

module.exports = router
