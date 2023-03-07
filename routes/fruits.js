const express = require('express')
const fruit_router = express.Router()


fruit_router.use(express.json())
fruit_router.use(express.urlencoded())

let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]




fruit_router.get('/', async(req,res) =>{
    res.json(fruits)
})

fruit_router.get('/:id',async(req,res)=>{
    res.json(fruits[req.params.id - 1])
})




fruit_router.post('/',(req,res)=>{
    fruits.push(req.body)
    res.json(fruits)
})

fruit_router.put('/:id',(req,res)=>{
    fruits[req.params.id-1]=req.body;
    res.json(fruits)
})

fruit_router.delete('/:id',(req,res)=>{
    fruits.splice(req.params.id-1,1)
    res.json(fruits)
})
module.exports = fruit_router