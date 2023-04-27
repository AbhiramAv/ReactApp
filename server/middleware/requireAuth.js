const jwt = require('jsonwebtoken');

function requireAuth( req, res, next) {
    console.log('In middleware');
    next();
}

module.exports = requireAuth;