const mongoose = require('mongoose')
const Schema  = mongoose.Schema

// item blueprint
const itemSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imgURL: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Item', itemSchema)