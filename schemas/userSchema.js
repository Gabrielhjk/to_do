// validacao dos dados com hapi/joi 
const Joi = require('@hapi/joi')

// schema para registro do user 
const UserSchemaRegister = Joi.object({
    name: Joi.string().max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirm_password: Joi.valid(Joi.ref('password')).required().messages({'any.only': 'Invalid Password'})
})


// schema para login do user 
const UserSchemaLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
})

module.exports = { UserSchemaRegister, UserSchemaLogin }