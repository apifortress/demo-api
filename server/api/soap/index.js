const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.type('application/xml');
    res.send('<?xml version="1.0" encoding="utf-8"?>  <Envelope> <Body> <Message id="messageIdentity"> test </Message> </Body> </Envelope>')
})


module.exports = router