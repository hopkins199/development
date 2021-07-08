const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')



// get all

bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(bounties)
    })
})

// get one

// bountyRouter.get("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     res.send(foundBounty)
// })

// search type

// bountyRouter.get("/search/type", (req, res) => {
//     const type = req.query.type
//     const filteredType = bounties.filter(bounty => bounty.type === type)
//     res.send(filteredType)
// })
// post one

bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

// Delete one
bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findByIdAndDelete({_id: req.params.bountyId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.firstName} ${deletedItem.lastName} from the database`)
    })
})
 
// update one
bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findByIdAndUpdate(
        { _id: req.params.bountyId },
        req.body,
        { new: true },
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})


module.exports = bountyRouter