const AppError = require("../utils/AppError")

function validationUser(Schema) {
    return (req, res, next) => {

        // validacao dos dados dos usuarios
        try {
            // pega o que vem no corpo da requisicao e compara com oque ta no schema 
            const { error, value } = Schema.validate(req.body)

            // se nao der erro o req.boy assume o valor que veio na requisicao de forma tratada 
            if (!error) {
                req.body = value
                return next()
            }

            // se de erro ele vai iterar e mostrar as mensagens de erro em string 
            const err = new Error(
                error.details.map(errorObject => errorObject.message).toString()
            )

            // caso o email e senha venham vazios 
            if (!req.body.email && !req.body.password) {
                return next(new AppError('Email and password are required', 400))
            } 

            // vai criar a propriedade de statusCode e adicionar o valor do status 
            err.status = 400
            next(err)

        } catch (err) {
            next(err)
        }
    }
}

module.exports = validationUser