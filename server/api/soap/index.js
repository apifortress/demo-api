const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.type('application/xml');
    res.send('<?xml version="1.0"?> <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope/" soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding"> <soap:Body> <m:GetPriceResponse xmlns:m="https://www.w3schools.com/prices"> <m:Price>1.90</m:Price> </m:GetPriceResponse> </soap:Body> </soap:Envelope>')
})


module.exports = router

