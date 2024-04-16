const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const storieController = require('../controllers/storieController')

router.post('/', storieController.create)
router.get('/', storieController.getAll)
router.delete('/:id', storieController.deleteOne)

module.exports = router
