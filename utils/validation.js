export default (Schema) => {
    return (req, res, next) => {

        // validacao 
        try {
            const { error, value } = Schema.validate(req.body)

            if (error === undefined || typeof error === 'undefined') return next()
            
            const err = new Error(
                error.details.map((errorObject) => errorObject.message).toString()
            )
            
            err.statusCode = 422
            next(err)
        } catch (err) {
            next(err)
        }
    }
}