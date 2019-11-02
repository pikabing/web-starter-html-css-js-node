const carBookController = {}
let CarModel = require('../models/car.model')
let CustomerModel = require('../models/customer.model')
let BookingModel = require('../models/booking.model')

carBookController.post = (req, res) => {
    
    CarModel.findOne({
        number: req.body.number
    }).then(carDoc => {
        if(carDoc.booked) {
            return res.status(400).send("Car is already booked")
        }
        carDoc.booked = true
        carDoc.save()
        CustomerModel.find({
            mobile: req.body.mobile
        }).then(doc => {
            if(doc == null) {
                return res.status(400).send("Invalid Customer Phone number")
            }
            let model = new BookingModel({
                car_booked:carDoc._id,
                customer: doc._id,
                issue_date : new Date(req.body.issue_date),
                return_date : new Date(req.body.return_date)
            }) 
            model.save()
            return res.status(200).send("Car booked")
        }).catch(err => {
            return res.status(404).send("Invalid User")
        })
    }).catch(err => {
        return res.status(404).send("Car Number Invalid")
    })
}

module.exports = carBookController