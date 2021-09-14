const getDate = async (req, res ) =>{
    try{

        if(Object.keys(req.body).length === 0){
            throw new Error('missing body')
        } 
        
        if (!req.body.username){
            throw new Error('missing username')
        } 
        let date = new Date()
        res.json({
            hour: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        })     

    }catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = {
    getDate,
}

