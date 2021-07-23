const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    votes: {
        upvote: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        downvote: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    comment: {
        type: Array,
        required: false,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Issue', issueSchema)