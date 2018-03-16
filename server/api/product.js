const router = require('express').Router();
const Product = require('../db/models/product')

router.get('/', (req, res, next) => {
    if(req.query.search) {
        res.send(req.query.search)
    } else {
        res.send("Hello from products!")
    }
})

router.get('/:id', (req, res, next) => {
    Product.findOne({
        where: {
            id : req.params.id
        }
    })
    .then(product => {res.json(product)})
    .catch(next)
})

module.exports = router;