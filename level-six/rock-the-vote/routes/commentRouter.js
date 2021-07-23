const express = require('express')
const commentRouter = express.Router()
const Comment = require("../models/comment.js")

// works in postman
commentRouter.post('/:issueId', (req, res, next) => {
    req.body.author = req.user._id
    req.body.issue = req.params.issueId
    console.log(req.body)
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

// untested mmkay
commentRouter.get('/:issueId', (req, res, next) => {
    Comment.find({ issue: req.params.issueId})
        .populate("user", "username")
        .exec((err, comments) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(comments)
        })
})








module.exports = commentRouter