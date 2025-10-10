const request = require('supertest')
const app = require('../index')
const sequelize = require('../db/db')

const AUTH_ROUTE = '/users/register'

describe('Users Error', () => {
    test('Email and password are required', async () => {
        const res = await request(app).post(AUTH_ROUTE).send({})
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Email and password are required')
    })

    test('User Already Exists', async () => {
        const res = await request(app).post(AUTH_ROUTE).send({name: 'Francisco', email: 'francisco@email.com', password: '12345678', confirm_password: '12345678'})
        expect(res.status).toBe(200)
        expect(res.body.message).toBe('User Already Exists')
    })

    test('Invalid Email', async () => {
        const res = await request(app).post(AUTH_ROUTE).send({name: 'Francisco', email: 'franciscoemail.com', password: '12345678', confirm_password: '12345678'})
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('\"email\" must be a valid email')
    })

})  

afterAll(() => {
    sequelize.close()
})