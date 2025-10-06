const express = require('express')
const controllers = require('../controllers/tasks')
const validate = require('../middlewares/validation_task')
const auth = require('../middlewares/auth')
const validation_token = require('../middlewares/validation_token')
const { TaskSchema } = require('../schemas/taskSchema')
const router = express.Router()

router.get('/', auth, validation_token, controllers.getHome)
router.get('/allTasks', auth, validation_token, controllers.getAllTasks)
router.get('/:id', auth, validation_token, controllers.getTaskId)
router.get('/create', auth, validation_token, controllers.getCreateTask)
router.post('/create', auth, validation_token, validate(TaskSchema), controllers.postTask)
router.get('/update/:id', auth, validation_token, controllers.getUpdateTask)
router.put('/update/:id', auth, validation_token, validate(TaskSchema), controllers.updateTask)
router.delete('/delete/:id', auth, validation_token, controllers.deleteTask)

module.exports = router