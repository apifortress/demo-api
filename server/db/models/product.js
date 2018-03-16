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
    },
    quantity: {
        type: Sequelize.INTEGER
    },
    imageURL: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    }
})

module.exports = Product