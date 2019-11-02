const customerCreateController = {}
let CustomerModel = require('../models/customer.model')

customerCreateController.post = (req, res, next) => {
   
    if(!req.body) {
        return res.status(400).send("Request Body is missing.")
    } 

    if(!(req.body.mobile.toString().length === 10)) {
        return res.status(400).json("Invalid Mobile Number")
    }

    let model = new CustomerModel(req.body)
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


module.exports = customerCreateController