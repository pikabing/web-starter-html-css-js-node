const carCreateController = {}
let CarModel = require('../models/car.model')

carCreateController.post = (req, res) => {
   
    if(!req.body) {
        return res.status(400).send("Request Body is missing.")
    } 

    let model = new CarModel(req.body)
    model.save()
    .then(doc => {
        if(!doc || doc.length === 0) {
            return res.status(500).send(doc)
        }
        return res.status(200).send(doc)
    }).catch(err => {
        return res.status(500).json(err)
    })
}


module.exports = carCreateController