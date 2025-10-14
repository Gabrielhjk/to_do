// const request = require('supertest')
// const app = require('../index')

// const ROUTER_LOGIN = '/users/login'
// const ROUTER_TASKS = '/tasks/create'

// describe('Post Task', () => {
//     const token = process.env.TOKEN_SECRET

//     // pegar o token do user logado para testar as rotas de tasks 
//     // beforeAll(async () => {
//     //     const res = await request(app).post(ROUTER_LOGIN).send({email: 'francisco@email.com', password: '12345678'})
        
//     //     token = res.body.token
//     // })

//     test('User not Authenticated', async () => {
//         const res = await request(app).post(ROUTER_TASKS).send({title: "Estudar Node.js", description: "Ler documentação do Express"})
//         expect(res.status).toBe(401)
//         expect(res.body.message).toBe('User not Authenticated')
//     })

//     test('error post', async () => {
//         const res = await request(app).post(ROUTER_TASKS).set('Authorization', token).send({title: "", description: "Ler documentação do Express"})
//         expect(res.status).toBe(400)
//         expect(res.body.message).toBe('\"title\" is not allowed to be empty')
//     })
// })