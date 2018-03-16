const router = require('express').Router();

router.get('/', (req, res, next) => {
    if(req.headers.user === "user1" && req.headers.pass === "1234") {
        res.send("APIToken")
    } else {
        res.send("Bad Username or Password. Please ty again.")
    }
})



module.exports = router;