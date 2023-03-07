const express = require('express')
const fruit_router = require('./fruits')
const user_router = express.Router()



user_router.use(express.json())
user_router.use(express.urlencoded())

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]



user_router.get('/',(req,res)=>{
    res.json(users)
})


user_router.get('/:id',(req,res)=>{
    res.json(users[req.params.id-1])
})


user_router.post('/',(req,res)=>{
    users.push(req.body)
    res.json(users)
})

user_router.put('/:id',(req,res)=>{
    users[req.params.id-1]=req.body;
    res.json(users)
})

user_router.delete('/:id',(req,res)=>{
    users.splice(req.params.id-1,1)
    res.json(users)
})
module.exports = user_router