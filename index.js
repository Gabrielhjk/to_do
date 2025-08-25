require('dotenv').config()
const express = require('express')
const session = require('express-session')
const db = require('./db/db')
const { RedisStore } = require('connect-redis')
const { createClient } = require('redis')
const port = process.env.PORT

const app = express()

// pegando as rotas 
const routerUser = require('./routes/routerUser')
const routerTask = require('./routes/routerTask')

// pegando corpo da requisicao 
app.use(express.urlencoded({
    extended: true
}))

// covertendo o corpo da requisicao para JSON 
app.use(express.json())


// configuracao redis / serve para armazenar as sessoes
const redisClient = createClient()
redisClient.connect().catch(console.error)


// middleware de sessao
app.use(session({
    name: 'session',
    secret: 'secret_pass',
    resave: false,
    saveUninitialized: false,
    store: new RedisStore({client: redisClient}),
    cookie: {
        maxAge: 360000,
        httpOnly: true,
        secure: false
    }
})) 

app.use('/', routerUser)
app.use('/tasks', routerTask)


db.sync().then(  
    app.listen(() => {
    console.log('The server is running on port ' + port)
})).catch((err) => console.log(err))


