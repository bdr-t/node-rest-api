
const headerMiddleware = async (req, res, next) => {
    try{
        res.set('Cache-control', 'no-cache')
        next()
    } catch(err){
        res.status(404).json({ message: err.message })
    }

}

module.exports = {headerMiddleware}