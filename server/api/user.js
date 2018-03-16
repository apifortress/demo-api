const router = require('express').Router();
const User = require('../db/models/user')


//if user credentials are correct, return api token. else, return bad u/p message
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