const express = require('express')
const router = express.Router()
const controllers = require('../controllers/users')
const validate = require('../middlewares/validation_user')
const { UserSchema } = require('../schemas/userSchema')

router.get('/register', controllers.getRegister)
router.get('/login', controllers.getLogin)
router.post('/register', validate(UserSchema), controllers.postRegister)
router.post('/login', validate(UserSchema), controllers.postLogin)


module.exports = router