
const uploadMedia = async (req, res) =>{
    const {mimetype} = req.file
    try{
        if(mimetype === 'image/png' || mimetype === 'image/gif' ||  mimetype === 'image/jpg'){
            res.send({message: 'Succes'})
        } else{
            throw new Error('Only allowed to post png, gif or jpg')
        }
    } catch(error){
        res.status(404).json({message: error.message})
    }
}


module.exports = {
    uploadMedia,
}