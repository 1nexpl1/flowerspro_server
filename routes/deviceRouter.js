const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', deviceController.create)
router.delete('/:id', deviceController.deleteOne)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router
