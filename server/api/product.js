const router = require('express').Router();

router.get('/', (req, res, next) => {
    if(req.query.search) {
        res.send(req.query.search)
    } else {
        res.send("Hello from products!")
    }
})

router.get('/:id', (req, res, next) => {
    res.send(req.params.id)
})

module.exports = router;