const router = require('express').Router();
const Product = require('../db/models/product')
const Op = require('sequelize').Op

router.get('/', (req, res, next) => {
    if(req.query.search) {
        Product.findAll({
            where: {
               name : {[Op.like] : '%' + req.query.search + '%'}
            }
        })
        .then(product => {
            res.json(product)
        })
        .catch(next)
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
    .then(product => {
        res.json(product)
    })
    .catch(next)
})

module.exports = router;