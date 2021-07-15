const express = require('express')
const itemRouter = express.Router()
const Item = require('../models/items')


// Get All
itemRouter.get('/', (req, res, next) => {
    Item.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(items)
    })
})


// Post One
itemRouter.post('/', (req, res, next) => {
    const newItem = new Item(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

// Get by type
itemRouter.get('/search/type', (req, res, next) => {
    Item.find({type: req.query.type}, (err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(items)
    })
})

//edit one
itemRouter.put('/:itemId', (req, res, next) => {
    Item.findByIdAndUpdate(
        {_id: req.params.itemId},
        req.body,
        { new: true },
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

module.exports = itemRouter