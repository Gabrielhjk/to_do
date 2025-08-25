const express = require('express')
const router = express.Router()
const controllers = require('../controllers/users')
const validate = require('../middlewares/validation_user')
const { userSchema } = require('../schemas/userSchema')

router.get('/register', controllers.getRegister)
router.get('/login', controllers.getLogin)
router.post('/register', validate(userSchema), controllers.postRegister)
router.post('/login', validate(userSchema), controllers.postLogin)


module.exports = router