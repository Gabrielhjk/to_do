// validacao dos dados com hapi/joi 
const Joi = require('@hapi/joi')

const TaskSchema = Joi.object({
    title: Joi.string().min(1).required(),
    description: Joi.string()
})

module.exports = { TaskSchema }