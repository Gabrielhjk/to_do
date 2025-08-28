const express = require('express')
const controllers = require('../controllers/tasks')
const validate = require('../middlewares/validation_task')
const auth = require('../middlewares/auth')
const { taskSchema } = require('../schemas/taskSchema')
const router = express.Router()

router.get('/', auth, controllers.getHome)
router.get('/allTasks', auth, controllers.getAllTasks)
router.get('/:id', auth, controllers.getTaskId)
router.get('/create', auth, controllers.getCreateTask)
router.post('/create', auth, validate(taskSchema), controllers.postTask)
router.get('/update/:id', auth, controllers.getUpdateTask)
router.put('/update/:id', auth, validate(taskSchema), controllers.updateTask)
router.delete('/remove/:id', auth, controllers.deleteTask)

module.exports = router