const Task = require('../models/Task')

module.exports = class tasksControllers {
    static getHome(req, res) {
        // puxar home com o react 
    }

    static async getAllTasks(req, res) {
        // retorna todas as tasks 
    }

    static async getTaskId(req, res) {
        // retorna task por id 
    }

    static getCreateTask(req, res) {
        // mostrar tela de criacao de task 
    }    

    static async postTask(req, res) {
        // criacao de tasks 
    }

    static getUpdateTask(req, res) {
        // mostrar tela de edicao de task 
    }

    static async updateTask(req, res){
        // atualizar task 
    }

    static async deleteTask(req, res) {
        // deleta a task 
    }
}

