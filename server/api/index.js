const router = require('express').Router();

//routing middleware
router.use('/user', require('./user'))
router.use('/product', require('./product'))
router.use('/cart', require('./cart'))

//bad api route middleware
router.use((req, res, next) => {
    const error = new Error('API Route Not Found')
    error.status = 404;
    next(error)
})

module.exports = router