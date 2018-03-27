const router = require('express').Router()

//routing middleware
router.use('/user', require('./user'))
router.use('/product', require('./product'))
router.use('/cart', require('./cart'))

module.exports = router