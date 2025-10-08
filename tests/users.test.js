const request = require('supertest')
const app = require('../index')

const AUTH_ROUTE = '/users/register'

describe('Retorna erro', () => {
    test('erro', async () => {
        const res = await request(app).post(AUTH_ROUTE).send({})
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Email and password are required')
    })
})