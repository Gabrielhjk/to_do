const express = require('express')
const router = express.Router()
const controllers = require('../controllers')
const validate = require('../utils/validation_user')
const { userSchema, taskSchema } = require('../schemas')

router.get('/', controllers)
// router.post('/register', validate(user), controllers)


module.exports = router