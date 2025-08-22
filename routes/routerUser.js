const express = require('express')
const router = express.Router()
const controllers = require('../controllers')
const validate = require('../utils/validation_user')
const { userSchema } = require('../schemas')

router.get('/register', controllers)
router.get('/login', controllers)
router.post('/register', validate(userSchema), controllers)
router.post('/login', validate(userSchema), controllers)


module.exports = router