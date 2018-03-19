const router = require('express').Router();
const User = require('../db/models/user')


//if user credentials are correct, return api token. else, return bad u/p message
router.post('/', (req, res, next) => {
    const currentUser = req.body.user;
    const password = req.body.password;
    User.findOne({
        where: {
            userName: currentUser
        }
    }).then(
        (user) => { 
                if (password == user.password){
                    res.send("USERTOKEN123AAABBB")
                } else {
                    res.send("Bad Username or Password. Please try again.")
                }
            }
        ) 
    }
)



module.exports = router;