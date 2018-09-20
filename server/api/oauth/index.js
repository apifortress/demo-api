const router = require('express').Router()
const User = require('../../db/models/user')

router.post('/auth', (req, res, next) => {
    if (req.headers.authorization === undefined) {
        res.status(401)
        res.send({"Message": "No Authorization Header", "Status": "401 (Unauthorized)"})
    } else {
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
                    if (user === null) {
                        res.status(401)
                        res.send("Bad Username/Password")
                    } else if (password == user.password){
                        res.send({Message: "Authentication Successful", Token: "USERTOKEN123AAABBB"})
                    } else {
                        res.status(401)
                        res.send({"Message": "Bad Username/Password", "Status": "401 (Unauthorized)"})
                    }
                } 
            )
        } else {
            res.status(401)
            res.send({"Message": "No Authorization Header", "Status": "401 (Unauthorized)"})
        }
    }
})





module.exports = router