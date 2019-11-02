const carListController = {}
let CarModel = require('../models/car.model')

carListController.get = (req, res) => {
    CarModel.find().then( doc => {
        return res.json(doc)
    }).catch(err => {
        res.status(404).send(err)
    })
}

module.exports = carListController

