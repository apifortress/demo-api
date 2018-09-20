const Sequelize = require('sequelize')

console.log(process.env.DATABASE_URL, process.env.PASSWORD, process.env.USERNAME)
const db = new Sequelize(
    process.env.DATABASE_URL,
    {   
        dialect: 'postgres',
        logging: false
    }
);



module.exports = db;