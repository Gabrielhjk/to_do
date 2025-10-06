require('dotenv').config()
const jwt = require('jsonwebtoken')

// cria o token 
module.exports = function generateAccessToken(user) {
    return jwt.sign({user}, process.env.TOKEN_SECRET, {expiresIn: '1h'})
}