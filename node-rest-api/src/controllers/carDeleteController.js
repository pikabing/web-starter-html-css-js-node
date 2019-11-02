const carDeleteController = {}
let carModel = require('../models/car.model')

carDeleteController.delete = (req, res) => {

    if(!req.query.number) {
        return res.status(404).send('Vehicle Number not found')
    }

    carModel.findOne({
        number: req.query.number
    }).then( doc => {
        if(doc === null)
            return res.status(404).send("Car not found")

        if(doc.booked){
            return res.status(400).send("Car is booked. Cannot delete the car")
        }

        doc.delete()
        return res.status(200).send("Car deleted")
    }).catch(err => {
        return res.staus(500).json(err)
    })

}

module.exports = carDeleteController