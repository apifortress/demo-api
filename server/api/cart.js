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
    
    res.sendStatus(201)
    } else {
        res.send("Bad User Token")
    }
})

router.get("/", (req, res, next) => {

    if(req.headers.usertoken === "USERTOKEN123AAABBB"){
        let cacheKeys = (cache.keys())
        let cartObj = {}
        cacheKeys.forEach((key) => {
            cartObj[key] = cache.get(key)
    })

    res.send(cartObj)
    }
    else {
        res.send("Bad User Token")
    }
})

module.exports = router