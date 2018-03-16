const router = require('express').Router();
const User = require('../db/models/user')

router.get('/', (req, res, next) => {
    const currentUser = req.headers.user;
    const password = req.headers.pass;
    User.findOne({
        where: {
            userName: currentUser
        }
    }).then(
        (user) => {
                if (password === user.password){
                    res.send("APIToken")
                } else {
                    res.send("Bad Username or Password. Please ty again.")
                }
            }
        ) 
    }
)



module.exports = router;