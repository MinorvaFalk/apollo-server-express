const { body } = require("express-validator")

const loginRequest = [
    body('email').isEmail().normalizeEmail(),
    body('password').notEmpty()
]

module.exports = { loginRequest }