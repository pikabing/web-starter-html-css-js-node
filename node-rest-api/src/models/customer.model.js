const mongoose = require('mongoose')

let CustomerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)