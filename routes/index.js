const { auth } = require('./auth')

module.exports = (app, express) => {
    app.get('/', (_, res) => {
        return res.status(200).send('Server is running')
    })
    
    app.use('/', auth(express))
}