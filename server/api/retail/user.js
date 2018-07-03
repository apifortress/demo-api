const router = require('express').Router();
const User = require('../../db/models/user')


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
                    res.send({message: "Login Successful", Token: "USERTOKEN123AAABBB"})
                } else {
                    res.status(401)
                    res.send({message: "Bad Username or Password. Please try again.", status: 401})
                }
            }
        ) 
    }
)



module.exports = router;