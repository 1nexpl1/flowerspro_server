const Router = require('express')
const router = new Router()
const postRouter = require('./postRouter')
const storieRouter = require('./storieRouter')
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/post', postRouter)
router.use('/storie', storieRouter)

module.exports = router
