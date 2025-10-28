const request = require('supertest')
const app = require('../index')

const ROUTER_REGISTER = '/users/register'
const ROUTER_LOGIN = '/users/login'

// testes na rota de register 
describe('Users Error', () => {
    test('Name is not Allowed Empyt', async () => {
        const res = await request(app).post(ROUTER_REGISTER).send({name: '', email: 'francisco@email.com', password: '123456789', confirm_password: '123456789'})
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('\"name\" is not allowed to be empty')
    })

    test('Email and password are required', async () => {
        const res = await request(app).post(ROUTER_REGISTER).send({name: 'Francisco', email: '', password: '', confirm_password: ''})
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Email and password are required')
    })

    test('User Already Exists', async () => {
        const res = await request(app).post(ROUTER_REGISTER).send({name: 'Francisco', email: 'francisco@email.com', password: '12345678', confirm_password: '12345678'})
        expect(res.status).toBe(200)
        expect(res.body.message).toBe('User Already Exists')
    })

    test('Email is not Allowed Empty', async () => {
        const res = await request(app).post(ROUTER_REGISTER).send({name: 'Francisco', email: '', password: '12345678', confirm_password: '12345678'})
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('\"email\" is not allowed to be empty')
    })

    test('Invalid Email', async () => {
        const res = await request(app).post(ROUTER_REGISTER).send({name: 'Francisco', email: 'franciscoemail.com', password: '12345678', confirm_password: '12345678'})
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('\"email\" must be a valid email')
    })

    test('Password Length less than 8 characters', async () => {
        const res = await request(app).post(ROUTER_REGISTER).send({name: 'Francisco', email: 'francisco@email.com', password: '123456', confirm_password: '123456'})
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('\"password\" length must be at least 8 characters long')
    })

    test('Passoword is not Allowed Empty', async () => {
        const res = await request(app).post(ROUTER_REGISTER).send({name: 'Francisco', email: 'francisco@email.com', password: '', confirm_password: ''})
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('\"password\" is not allowed to be empty')
    })

    test('Invalid Password', async () => {
        const res = await request(app).post(ROUTER_REGISTER).send({name: 'Francisco', email: 'francisco@email.com', password: '123456789', confirm_password: '123456788'})
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Invalid Password')
    })

})  

// testes na rota de login
describe('Users Error', () => {
    test('User not Exists', async () => {
        const res = await request(app).post(ROUTER_LOGIN).send({email: 'franciisco@gmail.com', password: '12345678'})
        expect(res.status).toBe(404)
        expect(res.body.message).toBe('User not Exists')
    })
})
