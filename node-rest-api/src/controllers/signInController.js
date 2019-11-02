const signInController = {}
let Customer = require('../models/customer.model')
const jwt = require('jsonwebtoken')

signInController.post = (req, res) => {
    Customer.findOne({
        mobile: req.body.mobile
    }).then(doc => {
        if(doc === null) {
            return res.status(400).json({
                status: "Auth Failed"
            })
        }
        const token = jwt.sign({
            mobile:req.body.mobile,
            _id: doc._id
        }, 'secret', {
            expiresIn: "1h"
        })
        return res.status(200).json({
            status: "Auth Successful",
            token : token
        })
    }).catch(err => {
        return res.status(500).json({
            error: err
        })
    })
}

module.exports = signInController