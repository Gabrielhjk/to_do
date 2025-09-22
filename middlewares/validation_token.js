const jwt = require('jsonwebtoken')
const AppError = require('../utils/AppError')

module.exports = function validation_token(req, res, next) {
    // pega o cabecalho da autorizacao (nesse caso e 'token')
    const authHeader = req.headers['token']
    // se nao for undefined ou null ele ignora o index 0 (Bearer) e pega so oque esta no index 1, o token
    const token = authHeader && authHeader.split(' ')[1]

    // se for undefined ou null retorna erro 
    if (!token) return next(new AppError('Invalid or Expired Token', 401))

    // verifica se o token e valido e nao expirou usando a chave secrete no .env
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        // se der algum erro 
        if (err) return next(new AppError('Invalid or Expired Token', 403))
        
        req.tokenData = decoded
        next()
    })
}