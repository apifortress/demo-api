const Sequelize = require('sequelize');
const db = require('../db')


const Product = db.define('product', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.FLOAT
    },
    category: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Product