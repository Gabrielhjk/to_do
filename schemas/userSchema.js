// validacao dos dados com hapi/joi 
const Joi = require('@hapi/joi')

const UserSchema = Joi.object({
    name: Joi.string().max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirm_password: Joi.valid(Joi.ref('password')).required().messages({'any.only': 'Passwords don`t match'})
})

module.exports = { UserSchema }