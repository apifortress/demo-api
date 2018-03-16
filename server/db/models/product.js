const Sequelize = require('sequelize');
const db = require('../db')


const Product = db.define('product', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    },
    category: {
        type: Sequelize.STRING
    }
})

module.exports = Product