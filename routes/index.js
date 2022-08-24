const { auth } = require('./auth')

module.exports = (app, express) => {    
    app.use('/', auth(express))
}