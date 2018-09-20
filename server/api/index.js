const router = require('express').Router();

//routing middleware
router.use('/retail', require('./retail'))
router.use('/junit', require('./junit'))
router.use('/soap', require('./soap'))
router.use('/oauth', require('./oauth'))

//bad api route middleware
router.use((req, res, next) => {
    const error = new Error('API Route Not Found')
    error.status = 404;
    next(error)
})

module.exports = router