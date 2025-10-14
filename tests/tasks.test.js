const request = require('supertest')
const app = require('../index')

const ROUTER_TASKS = '/tasks/create'

describe('Post Task', () => {
    test('error post', async () => {
        const res = await request(app).post(ROUTER_TASKS).send({title: "", description: "Ler documentação do Express"})
        expect(res.status).toBe(401)
        expect(res.body.message).toBe('\"title\" is not allowed to be empty')
    })
})