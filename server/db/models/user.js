const Sequelize = require('sequelize');
const db = require('../db')


const User = db.define('user', {
    userName: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
})

module.exports = User