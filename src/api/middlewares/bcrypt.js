const bcrypt = require('bcrypt')

module.exports = function (req, res, next) {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        req.body.password = hash
        next()
    });
}
