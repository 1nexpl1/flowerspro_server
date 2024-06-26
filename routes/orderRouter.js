const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/', orderController.create)
router.get('/', orderController.getAll)
router.get('/personal', orderController.getAllPersonal)
router.delete('/:id', orderController.deleteOne)

module.exports = router