const mongoose = require('mongoose')

let CarSchema = new mongoose.Schema({

    city: {
        type: String,
        required : true
    },
    rent: {
        type: Number,
        default: 1000
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    model: {
        type: String,
        require: true
    },
    capacity: {
        type: Number,
        default: 4
    },
    booked: {
        type: Boolean,
        default: false
    }

})



module.exports = mongoose.model('Car', CarSchema)