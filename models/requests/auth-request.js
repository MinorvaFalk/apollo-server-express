const { body } = require("express-validator")

const loginRequest = [
    body('email').isEmail().normalizeEmail()
]

module.exports = { loginRequest }