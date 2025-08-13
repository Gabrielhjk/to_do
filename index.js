require('dotenv').config()
const express = require('express')
const db = require('./db/db')
const port = process.env.PORT

const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())



db.sync().then(  
    app.listen(() => {
    console.log('The server is running on port ' + port)
})).catch((err) => console.log(err))


