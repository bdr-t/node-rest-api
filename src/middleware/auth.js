const auth = async (req, res, next) => {
    try {
        let isAuth = req.headers.authorization?.split(' ')[0]
        if (isAuth === 'Basic') next()
        else {
            throw new Error('Unauthorized')
        }
    } catch (err) {
        res.status(401).json({ message: err.message })
    }

}

module.exports = { auth }

