const express = require('express')
const Task = require('../models/Task')
const auth = require('../middleware/auth')

const router = express.Router()

router
.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(500).send(e)
    }
})
// GET /tasks?completed=true/false
//  GET /tasks?limit=10?skip=0
//  GET /tasks?sortBy=createdAt_asc
.get('/tasks', auth, async (req, res) => {
    const match = {}
    const options = {}
    if (req.query.completed) {
        match.completed = req.query.completed === "true"
    }
    if (req.query.limit) {
        options.limit = parseInt(req.query.limit)
    }
    if (req.query.skip) {
        options.skip = parseInt(req.query.skip)
    }
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        options.sort[parts[0]] = parts[1] === "desc" ? -1: parts[1] === "asc" ?  1:1
    }
    try{
        await req.user.populate({
            path: 'tasks',
            match,
            options
        }).execPopulate()
        res.send(req.user.tasks)
    }catch(e){
        res.status(500).send(e)
    }
})
.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id
    try{
        const task = await Task.findOne({_id, owner: req.user._id})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send(error)
    }
})
.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every(element => allowedUpdates.includes(element))
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'})
    }
    const _id = req.params.id
    try{
        const task = await Task.findOne({_id, owner: req.user._id})
        if(!task){
            return res.status(404).send()
        }
        updates.forEach(update => task[update] = req.body[update])
        await task.save()
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})
.delete('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id
    try{
        const task = await Task.findOneAndDelete({_id, owner: req.user._id}) 
        if (!task){
            return res.status(404).send()
        }
        res.send(task)  
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router