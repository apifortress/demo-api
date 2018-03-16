const router = require('express').Router();
const Product = require('../db/models/product')
const Op = require('sequelize').Op

router.get('/', (req, res, next) => {
    if (req.headers.token !== "APIToken"){
        res.send("Unauthorized User")
    } else {
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
        Product.findAll().then(products => res.send(products))
        }
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