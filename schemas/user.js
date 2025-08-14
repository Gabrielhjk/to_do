// validacao dos dados com hapi/joi 
const Joi = require('@hapi/joi')

export const User = Joi.object({
    name: Joi.string().max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(20).required(),
    confirm_password: Joi.ref('password')
})
