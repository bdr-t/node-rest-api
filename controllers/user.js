
const getUser = async (req, res) =>{
    try{
        res.send({
            nom: 'bader',
            edat:'23',
            url: 'get',
        })
    } catch(error){
        res.status(404).json({message: error.message})
    }
}


module.exports = {
    getUser,
}