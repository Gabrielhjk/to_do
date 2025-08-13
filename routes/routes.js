const express = require('express')
const router = express.Router()
const controllers = require('../controllers')
const validate = require('../utils/validation')
const { user, to_do } = require('../models')

router.get('/', controllers)
// router.post('/register', validate(user), controllers)


module.exports = router