const Task = require('../models/Task')
const User = require('../models/User')

module.exports = class tasksControllers {
    static getHome(req, res) {
        // puxar home com o react 
    }

    static async getAllTasks(req, res) {
        const userId = req.session.userId 
        let emptyTasks = false

        // busca o usuario pelo id 
        const user = User.findOne({ where: {id: userId}, plain: true, include: Task })

        // verifica se o usuario existe 
        if (!user) {
            console.log('User not exists')
            return
        }

        // itera sobre sobre todas as tasks 
        const tasks = await user.Tasks.map((task) => task.dataValues)

        // verifica se nao tem task adicionada 
        if (tasks.length === 0 ) {
            emptyTasks = true
        }
    }

    static async getTaskId(req, res) {
        const taskId = req.params.id
        const userId = req.session.useId 

        const task = await Task.findOne({ where: {id: taskId, userId: userId }})

        // retornar tela da tarefa com o id especifico 
    }

    static getCreateTask(req, res) {
        // mostrar tela de criacao de task 
    }    

    static async postTask(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            userId: req.session.userId
        }

        if (!task.title) {
            console.log('The word have more than one letter')
        }

        await Task.create(task) 
    }

    static getUpdateTask(req, res) {
        // mostrar tela de edicao de task 
    }

    static async updateTask(req, res){
        // atualizar task 
    }

    static async deleteTask(req, res) {
        const userId = req.session.userId
        const taskId = req.params.id

        const task = Task.findOne({ where: {id: taskId, userId: userId}})

        if (!task) {
            console.log('Task not exists')
            return
        }

        await Task.destroy(task)
    }
}

