const express = require('express')
const bountyRouter = express.Router()
const { v4: uuidv4 } = require("uuid")


const bounties = [
    { firstName: "Darth", lastName: "Sploder", living: true, bounty: 2000000, type: "Sith", _id: uuidv4() },
    { firstName: "Darth", lastName: "Stroyer", living: true, bounty: 950000, type: "Sith", _id: uuidv4() },
    { firstName: "Darth", lastName: "Trocious", living: true, bounty: 1800000, type: "Sith", _id: uuidv4() },
    { firstName: "Darth", lastName: "Urderer", living: true, bounty: 2500000, type: "Sith", _id: uuidv4() },
    { firstName: "Darth", lastName: "It-Head", living: true, bounty: 3000000, type: "Sith", _id: uuidv4() },
    { firstName: "Dud", lastName: "Bolt", living: true, bounty: 1750000, type: "Jedi", _id: uuidv4() },
    { firstName: "Sio", lastName: "Bibble", living: true, bounty: 2250000, type: "Jedi", _id: uuidv4() },
    { firstName: "Shu", lastName: "Mai", living: true, bounty: 1100000, type: "Jedi", _id: uuidv4() },
    { firstName: "Loatha", lastName: "Sommover", living: true, bounty: 3300000, type: "Jedi", _id: uuidv4() },
    { firstName: "Elan", lastName: "Sleazebaggano", living: true, bounty: 5000000, type: "Jedi", _id: uuidv4() }
]

// get all

bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

// get one

bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

// search type

bountyRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredType = bounties.filter(bounty => bounty.type === type)
    res.send(filteredType)
})
// post one

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
})

// Delete one
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId  = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty!")
})
 
// update one
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})


module.exports = bountyRouter