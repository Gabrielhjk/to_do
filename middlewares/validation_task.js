function validationTask(Schema) {
    return (req, res, next) => {

        // validacao dos dados das tasks 
        try {
            const { error, value } = Schema.validate(req.body)

            if (!error) {
                req.body = value
                return next()
            }

            const err = new Error(
                error.details.map(errorObject => errorObject.message).toString()
            )
         
            err.status = 400
            next(err)

        } catch (err) {
            next(err)
        }
    } 
}

module.exports = validationTask