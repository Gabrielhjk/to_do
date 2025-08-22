const express = require('express')
// const controllers = require('../controllers/tasks')
const validate = require('../utils/validation_task')
const { taskSchema } = require('../schemas/taskSchema')
const router = express.Router()

router.get('/', )
router.get('/:id', )
router.post('/create', validate(taskSchema), )
router.put('/update/:id', validate(taskSchema), )
router.delete('/remove/:id', )

module.exports = router