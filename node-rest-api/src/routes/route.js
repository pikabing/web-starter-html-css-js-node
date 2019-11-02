let express = require('express')

const carListController = require('../controllers/carListController')
const carCreateController = require('../controllers/carCreateController')
const customerCreateController = require('../controllers/customerCreateController')
const carBookController = require('../controllers/carBookController')
const carByModelController = require('../controllers/carByModelController')
const carDeleteController = require('../controllers/carDeleteController')
const carUpdateController = require('../controllers/carUpdateController')
const carFilterController = require('../controllers/carFilterController')
const signInController = require('../controllers/signInController')
const auth = require('../auth/auth')

let router = express()

// List of all cars
router.get('/cars', carListController.get)

// Create cars
router.post('/cars',auth, carCreateController.post)

//Create Customer
router.post('/customer',auth, customerCreateController.post)

//Book cars
router.post('/book',auth, carBookController.post)

//Get cars by model
router.get('/cars/model', carByModelController.get)

// Delete cars
router.delete('/cars',auth, carDeleteController.delete)

//Update cars
router.put('/cars',auth, carUpdateController.put)

//Filters 
router.get('/cars/date',carFilterController.filterByDate)
router.get('/cars/seats',carFilterController.filterBySeatingCapacity)
router.get('/cars/rent',carFilterController.filterByRent)
router.get('/cars/city',carFilterController.filterByCity)

//login
router.post('/login', signInController.post)
module.exports = router