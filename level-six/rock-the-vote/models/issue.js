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
    comment: {
        type: Array,
        required: false,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likes: {
        type: Number
        
    },
    upVoters: {
        type: Number
        
    },
    downVoters: {
        type: Number
    }
})

module.exports = mongoose.model('Issue', issueSchema)