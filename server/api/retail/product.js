const router = require('express').Router();
const Product = require('../../db/models/product')
const Op = require('sequelize').Op

/*check for token; If token and query param, find appropriate db entry(s)
else, if token return all items
if no token, return unauthorized user*/
router.get('/', (req, res, next) => {
    if (req.headers.key !== "ABC123"){
        res.status(401)
        res.send({Message: "Unauthorized Token", Status: 401})
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

/*if token, return item by id
else, unauthorized token*/
router.get('/:id', (req, res, next) => {
    if (req.headers.key !== "ABC123"){
        res.status(401)
        res.send({Error: "Unauthorized Token", Status: 401})
    } else {
    Product.findOne({
        where: {
            id : req.params.id
        }
    })
    .then(product => {
        if (product === null) {
            res.sendStatus(404)
        } else {
            res.json(product)
    }
    })
    .catch(next)
    }
})

module.exports = router;