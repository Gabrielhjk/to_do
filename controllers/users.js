const User = require('../models/User')
const bcrpyt = require('bcryptjs')

module.exports = class UsersController {
    static getRegister(req, res) {
        // mostrar tela de login no front 
    }

    static async postRegister(req, res) {
        // pega o input do corpo da requisicao 
        const {name, email, password, confirm_password} = req.body
        
        // verifica se as senhas sao compativeis 
        if (confirm_password != password) {
            console.log('Password invalid')
            return
        }
        
        // busca o email do usuario no banco
        const checkUserExists = await User.findOne({where: {email: email}}) 
        
        // verifica se ja existe algum usuario com o email cadastrado 
        if (checkUserExists) {
            console.log('User alredy exists')
            return
        }
        
        // gera valores aleatorios com o cost factor com o valor de 10 
        const salt = bcrpyt.genSaltSync(10)
        // pega a senha enviada pelo o usuario e faz um hash 
        const hashedPassword = bcrypt.hashSync(password, salt)
        
        // corpo que vai ser enviado para o banco 
        const data = {
            name: name,
            email: email,
            password: hashedPassword,
        }

        try {
            await User.create(data)
        } catch(err) {
            console.log(err)
        }

    }

    static getLogin(req, res) {
        // mostrar tela de login no front 
    }

    static async postLogin(req, res) {
        // pega o input do corpo da requisicao 
        const { email, password } = req.body

        // busca o email do usuario no banco
        const checkUserExists = await User.findOne({where: {email: email}})

        // verifica se ja existe algum usuario com o email cadastrado 
        if (!checkUserExists) {
            console.log('User not exists')
        }

        // compara a senha criptografada no banco com a senha digitada pelo usuario 
        const compare_password = bcrpyt.compareSync(password, checkUserExists.password)

        // verifica se a senha e igual a do banco
        if (!compare_password) {
            console.log('Invalid Password')
        }

    } 
}