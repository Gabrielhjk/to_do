// validacao dos dados com hapi/joi 
const Joi = require('@hapi/joi')

export const TaskSchema = Joi.object({
    title: Joi.string().min(1).max(200).required(),
    description: Joi.string().min(1).max(500).required()
})

