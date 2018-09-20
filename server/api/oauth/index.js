const router = require('express').Router()
const User = require('../../db/models/user')

router.post('/auth', (req, res, next) => {
    const authHeader = req.headers.authorization.split(' ')
    if (authHeader[0] === "Basic") {
        const userPass = (Buffer.from(authHeader[1], 'base64').toString())
        const username = userPass.split(":")[0]
        const password = userPass.split(":")[1]
        User.findOne({
            where: {
                userName: username
            }
        }).then(
            (user) => {
                if (password == user.password){
                    res.send({message: "Authentication Successful", Token: "USERTOKEN123AAABBB"})
                } else {
                    res.status(401)
                    res.send("Bad Username/Password")
                }
            } 
        )
    } else {
        res.status(401)
        res.send("Bad Authorization Header")
    }
})





module.exports = router