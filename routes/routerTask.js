const express = require('express')
const controllers = require('../controllers/tasks')
const validate = require('../utils/validation_task')
const { taskSchema } = require('../schemas/taskSchema')
const router = express.Router()

router.get('/', controllers.getHome)
router.get('/allTasks', controllers.getAllTasks)
router.get('/:id', controllers.getTaskId)
router.get('/create', controllers.getCreateTask)
router.post('/create', validate(taskSchema), controllers.postTask)
router.get('update/:id', controllers.getUpdateTask)
router.put('/update/:id', validate(taskSchema), controllers.updateTask)
router.delete('/remove/:id', controllers.deleteTask)

module.exports = router