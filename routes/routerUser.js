const express = require('express')
const router = express.Router()
const controllers = require('../controllers/users')
const validate = require('../middlewares/validation_user')
const { UserSchemaRegister, UserSchemaLogin } = require('../schemas/userSchema')

router.get('/register', controllers.getRegister)
router.get('/login', controllers.getLogin)
router.post('/register', validate(UserSchemaRegister), controllers.postRegister)
router.post('/login', validate(UserSchemaLogin), controllers.postLogin)


module.exports = router