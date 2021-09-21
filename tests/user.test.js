const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/User')
const {userOneId, userOne, setupDatabase} = require('./fixtures/db')


beforeEach(setupDatabase)

test('Should signup new user',async () => {
    const response = await request(app).post('/users').send({
        name: 'Ivan',
        email: "helloivan@gmail.com",
        password: "Mypass777!"
    }).expect(201)

    // Assert the database was changed correctly
    const user = await User.findById(response.body.user._id)
    await expect(user).not.toBeNull()

    // Assertions about the response

    expect(response.body).toMatchObject({
        user:{
            name:'Ivan',
            email: "helloivan@gmail.com"
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe("Mypass777!")


})

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email:userOne.email,
        password:userOne.password
    }).expect(200)

    const user = await User.findById(response.body.user._id)
    await expect(user).not.toBeNull()

    expect(response.body).toMatchObject({
        token: user.tokens[1].token
    })
})

test('Should not login non-existing user', async () => {
    await request(app).post('/users/login').send({
        email: 'someemail@example.com',
        password:'algunacontraseña98!!'
    }).expect(400)
})

test('Should get profile from existing user', async () => {
    await request(app)
    .get('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
})

test('Should not get profile from unauthenticated user', async () => {
    await request(app)
    .get('/users/me')
    .send()
    .expect(401)
})

test('Should delete existing user', async () => {
    await request(app)
    .delete('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)

    const user = await User.findById(userOneId)
    await expect(user).toBeNull()
})
test('Should not delete unauthenticated user', async () => {
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})

test('Should upload avatar image', async () => {
    await request(app)
    .post('/users/me/avatar')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .attach('avatar','tests/fixtures/profile-pic.jpg')
    .expect(200)

    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user fields', async () => {
    await request(app)
    .patch('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send({
        name: 'Federico Siniestas'
    })
    .expect(200)

    const user = await User.findById(userOneId)
    expect(user.name).not.toBe(userOne.name)
})

test('Should not update invalid user fields', async () => {
    await request(app)
    .patch('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send({
        location: 'Barranquilla'
    })
    .expect(400)

})