const express = require('express')
const app = express()
const PORT = 3000
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const api = require('./api')
const db = require('./db')

//connection status middleware
app.use(volleyball) 

// app.use() //body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', require('./api'))

app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  }) // Generic error handling.

db.sync().then(
    app.listen(PORT, function(){
        console.log('listening on 3000') //logging to view server start
    })
)

