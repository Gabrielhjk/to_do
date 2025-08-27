function validationUser(Schema) {
    return (req, res, next) => {

        // validacao dos dados dos usuarios
        try {
            const { error, value } = Schema.validate(req.body)

            if (!error) {
                req.body = value
                return next()
            }

            const err = new Error(
                error.details.map(errorObject => errorObject.message).toString()
            )

            err.statusCode = 422
            next(err)

        } catch (err) {
            next(err)
        }
    }
}

module.exports = validationUser