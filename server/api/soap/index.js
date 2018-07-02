const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.type('application/xml');
    res.send('<top_level_bracket> <outer_bracket> <test> test </test> </outer_bracket> </top_level_bracket>')
})


module.exports = router