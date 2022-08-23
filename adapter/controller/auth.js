const axios = require('axios')

const login = async (req, res) => {
    const { email, password } = req.body

    axios
        .get("http://localhost:5000/user", {
            params: {
                email: email,
                password: password
            }
        })
        .then(response => {
            if (response.data.length != 0) {
                res.status(200).send('User Found!!!')
            }else {
                res.status(401).send('Invalid User')
            }
        })
        .catch(error => {
            console.log(error)

            res.status(400).send(error)
        })

    
    return
}

module.exports = {
    login
}