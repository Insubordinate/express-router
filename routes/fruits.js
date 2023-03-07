const express = require('express')
const fruit_router = express.Router()
const {check,validationResult} = require('express-validator')

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




fruit_router.post('/',
    check('color')
    .isLength({min:1})
    .withMessage('Must be 1 character minimum')
    .isAlpha()
    .withMessage('No Numbers')
    ,(req,res)=>{
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
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