const router = require('express').Router();
const User = require('../db/models/user')
const Product = require('../db/models/product')
const cache = require('memory-cache')

router.put('/', (req, res, next) => {

    if(req.headers.usertoken === "USERTOKEN123AAABBB"){
        const cart = {}
        for(item in req.body) {
            cart[item] = req.body[item]
            cache.put(item, req.body[item], 18000000)
    }
    
        res.send({Message: "Successfully added", Status: 201})
    } else {
        res.send({Error: "Bad User Token", Status: 401})
    }
})

router.get("/",  async (req, res, next) => {
    if(req.headers.usertoken === "USERTOKEN123AAABBB"){
        let cacheKeys = cache.keys()
        let cartObj = {}
        let products = [];
        Promise.all(cacheKeys.map((key) => {
            return Product.findById(key)
            .then(product => {
                let productName = product.dataValues
                let prodObj = {id: key, 
                               item: productName.name, 
                               quantity : cache.get(key)};
                products.push(prodObj)
                
        })
    })).then(() => res.send(products))
    }
    else {
        res.send({Error: "Bad User Token", Status: 401})
    }
})

module.exports = router