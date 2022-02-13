const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'KB',
    email: 'KB@example.com',
    password: 'xxxxxx'
}

beforeEach(async() => {
   await User.deleteMany()
   await new User(userOne).save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Edward',
        email: 'edward@example.com',
        password: 'xxxxxx'
    }).expect(201)
})

test('Should login existing user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login nonexisting user', async() => {
    await request(app).post('/users/login').send({
        email: 'nkem',
        password: 'oooooo'
    }).expect(400)
})