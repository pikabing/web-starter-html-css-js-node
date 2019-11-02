const mongoose = require('mongoose')

let BookingSchema = new mongoose.Schema({

    car_booked: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },
    issue_date: Date,
    return_date:Date

})

module.exports = mongoose.model('Booking', BookingSchema)