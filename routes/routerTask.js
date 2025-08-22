const express = require('express')
const controllers = require('../controllers/to_do')
const validate = require('../utils/validation_task')
const { taskSchema } = require('../schemas')
const router = express.Router()

router.get('/', controllers)
router.get('/:id', controllers)
router.post('/create', validate(taskSchema), controllers)
router.put('/update/:id', validate(taskSchema), controllers)
router.remove('/remove/:id', controllers)

module.exports = router