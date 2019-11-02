const carFilterController = {}
let CarModel = require('../models/car.model')
let BookingModel = require('../models/booking.model')

exports.filterByDate = (req, res) => {

    if(req.body.date === "") {
        return res.status(400).send("Date parameter not found")
    }

    let cars = []
    BookingModel.find({
        return_date : { $lte : new Date(req.body.date)}
    }).populate('car_booked').then(doc => {
        cars = doc.map(d => d.car_booked);
        CarModel.find({
            booked:false
         }).then(carDoc => {
             return res.status(200).send(carDoc.concat(cars))
         }).catch(err => {
             return res.status(500).send(err)
         })
    }).catch(err => {
        return res.status(500).send(err)
    })

}

exports.filterByRent = (req, res)=> {

    if(req.body.rent === ""){
        return res.status(400).send("Rent parameter not found")
    }

    CarModel.find({
        rent: { $lte : req.body.rent}
    }).then(doc => {
        return res.status(200).send(doc)
    }).catch(err => {
        return res.status(500).send(err)
    })
}

exports.filterByCity = (req, res) => {
    if(req.body.city === ""){
        return res.status(400).send("City parameter not found")
    }

    CarModel.find({
        city: req.body.city
    }).then(doc => {
        return res.status(200).send(doc)
    }).catch(err => {
        return res.status(500).send(err)
    })
}

exports.filterBySeatingCapacity = (req, res) => {
    if(req.body.seats === ""){
        return res.status(400).send("seats parameter not found")
    }

    CarModel.find({
        capacity: req.body.seats
    }).then(doc => {
        return res.status(200).send(doc)
    }).catch(err => {
        return res.status(500).send(err)
    })
}

exports.carFilterController