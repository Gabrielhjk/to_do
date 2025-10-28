function isAuthenticated(req, res, next) {
    // caso a sessao do user exista segue 
    if (req.session && req.session.userId) {
        return next()
    } 
    
    // caso nao, vai explanar a mensagem de erro 
   res.status(401).json({message: 'User not Authenticated'})
}

module.exports = isAuthenticated