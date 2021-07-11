const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")


// get all
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(items)
    })
})

// post one
inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

// Delete One
inventoryRouter.delete("/:itemId", (req, res, next) => {
    Inventory.findByIdAndDelete({_id: req.params.itemId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
    })
})


// Edit One
inventoryRouter.put("/:itemId", (req, res, next) => {
    Inventory.findByIdAndUpdate(
        { _id: req.params.itemId },
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


module.exports = inventoryRouter