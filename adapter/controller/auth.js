const login = async (req, res) => {
    const { email } = req.body

    
    return res.status(200).send(`Email: ${email}`)
}

module.exports = {
    login
}