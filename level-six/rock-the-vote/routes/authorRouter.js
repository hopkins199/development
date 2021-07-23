const express = require('express')
const authorRouter = express.Router()
const User = require('../models/user.js')



authorRouter.get('/', (req, res, next) => {
    User.find((err, authors) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(authors)
    })
})

module.exports = authorRouter