const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send("<test> test </test>")
})


module.exports = router