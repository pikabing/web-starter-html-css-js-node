const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded_res = jwt.verify(token, 'secret')
        next();
    } catch (err) {
        return res.status(400).json({
            status: "Auth Failed"
        })
    }
    
}