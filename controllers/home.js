const getDate = async (req, res ) =>{
    try{

        if(Object.keys(req.body).length === 0){
            console.log('req body {}')
            throw new Error('missing body')
        } 
        
        if (!req.body.username){
            throw new Error('missing username')
        } 
        let date = new Date()
        res.send({
            hour: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        })     

    }catch(err){
        res.status(404).json({message: err.message})
    }
}

module.exports = {
    getDate,
}

