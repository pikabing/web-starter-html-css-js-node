let express = require('express')
let app = express()
let routes = require('./routes/route')
const dbConfig =  require('./config/database.config')
const mongoose = require('mongoose')
const path = require('path')
let bodyParser = require('body-parser')
app.use(bodyParser.json())
mongoose.Promise = global.Promise
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log("Couldn't connect to the database..." + err);
    process.exit()
})
app.use(express.static('public'))
app.use('/',routes)
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/err500.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.info(`Server has started on ${PORT}`))