const carByModelController = {}
let CarModel = require('../models/car.model')

carByModelController.get = (req, res) => {

    CarModel.find({
        model: req.query.model
    }).then(doc => {
        return res.status(200).send(doc)
    }).catch(err => {
        return res.send(500).send("Couldn't connect")
    })

}

module.exports = carByModelController