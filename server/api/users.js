const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send("Hello from users!")
})

module.exports = router;