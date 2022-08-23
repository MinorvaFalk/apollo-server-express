const { login } = require('../adapter/controller/auth')
const { loginRequest } = require('../models/requests/auth-request')
const { validate } = require('../utils/helpers/validate')

module.exports.auth = (express) => {
    const router = express.Router()

    router.post('/login', loginRequest, validate, login)

    return router
}