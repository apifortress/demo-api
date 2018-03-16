const router = require('express').Router();

router.use('/user', require('./user'))
router.use('/product', require('./product'))

router.use((req, res, next) => {
    const error = new Error('API Route Not Found')
    error.status = 404;
    next(error)
})

module.exports = router