const carUpdateController = {}
let CarModel = require('../models/car.model')
let CustomerModel = require('../models/customer.model')

carUpdateController.put = (req, res) => {
    if(!req.query.number) {
        return res.status(404).send('Vehicle Number not found')
    }
    
    CarModel.findOne({
        number: req.query.number
    }).then( doc => {
        if(doc === null) {
            return res.status(404).send("Car not found")
        }

        if(doc.booked){
            return res.status(400).send("Car is booked. Cannot update the car")
        }  
        
        doc.rent = req.body.rent
        doc.capacity = req.body.capacity
        doc.booked = req.body.booked
        doc.number = req.body.number
        doc.city = req.body.city
        doc.model = req.body.model
        doc.save()
        
        return res.status(200).send("Car successfully updated")
        
    }).catch(err => res.json(err))

    CustomerModel.findOneAndUpdate({
        car_booked: req.query.number
    }, newNumber, {
        new: true
    }).then( doc => {
        return res.json(doc)
    }).catch(err => res.json(err))

}

module.exports = carUpdateController