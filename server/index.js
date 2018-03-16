const express = require('express')
const app = express()
const PORT = 3000
const volleyball = require('volleyball')
const bodyParser = require('body-parser')

//connection status middleware
app.use(volleyball) 

// app.use() //body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, function(){
    console.log('listening on 3000') //logging to view server start
})

