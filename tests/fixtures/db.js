const jwt = require('jsonwebtoken')
const { MongoTopologyClosedError } = require('mongodb')
const mongoose = require('mongoose')
const Task = require('../../src/models/Task')
const User = require('../../src/models/User')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name:"Ivan Mardini",
    email:"ivann@example.com",
    password:"pass888!!",
    tokens:[
        {
            token:jwt.sign({_id:userOneId},process.env.SECRETKEY_JWT)
        }
    ]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id : userTwoId,
    name: 'Federico',
    email: 'fede@example.com',
    password: 'myhouse99@@',
    tokens:[
        {
            token: jwt.sign({_id:userTwoId}, process.env.SECRETKEY_JWT)
        }
    ]
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'First task',
    completed: false,
    owner: userTwoId
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Second task',
    completed: false,
    owner: userOneId
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Third task',
    completed: true,
    owner: userTwoId
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}


module.exports = {
    userOneId,
    userOne,
    userTwo,
    userTwoId,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}