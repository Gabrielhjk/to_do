const User = require('../models/User')
const bcrpyt = require('bcryptjs')
const AppError = require('../utils/AppError')

module.exports = class UsersController {
    static getRegister(req, res) {
        // mostrar tela de login no front 
    }

    static async postRegister(req, res, next) {
        try {
            // pega o input do corpo da requisicao 
            const {name, email, password, confirm_password} = req.body
            
            // verifica se as senhas sao compativeis 
            // if (confirm_password != password) {
            //     const error = new Error('Invalid Passwords')
            //     err.status = 404
            //     throw error
            // }
            
            // busca o email do usuario no banco
            const checkUserExists = await User.findOne({where: {email: email}}) 
            
            // verifica se ja existe algum usuario com o email cadastrado 
            if (checkUserExists) {
                return next(new AppError('User Already Exists', 200))
            }
            
            // gera valores aleatorios com o cost factor com o valor de 10 
            const salt = bcrpyt.genSaltSync(10)
            // pega a senha enviada pelo o usuario e faz um hash 
            const hashedPassword = bcrpyt.hashSync(password, salt)
            
            // corpo que vai ser enviado para o banco 
            const data = {
                name: name,
                email: email,
                password: hashedPassword,
            }

            const newUser = await User.create(data)
            req.session.userId = newUser.id  
            
            // retorna a confirmacao da criacao do user 
            return res.status(201).json({
                message: 'User Created Successfully'
            })

    } catch(err){
        next(err)
    }
}

    static getLogin(req, res) {
        // mostrar tela de login no front 
    }

    static async postLogin(req, res, next) {
        try {
            // pega o input do corpo da requisicao 
            const { email, password } = req.body

            // busca o email do usuario no banco
            const checkUserExists = await User.findOne({where: {email: email}})

            // verifica se ja existe algum usuario com o email cadastrado 
            if (!checkUserExists) {
                return next(new AppError('User don`t Exists', 404))
            }

            // compara a senha criptografada no banco com a senha digitada pelo usuario 
            const compare_password = bcrpyt.compareSync(password, checkUserExists.password)

            // verifica se a senha e igual a do banco
            if (!compare_password) {
                return next(new AppError('Invalid Passwords', 404))
            }

            req.session.userId = checkUserExists.id

            // retorna a confirmacao de login do user
            res.status(200).json({
                message: 'Login Successful'
            })
    } catch(err) {
        next(err)
    }} 
}