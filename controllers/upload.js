
const uploadMedia = async (req, res) => {

    try {
        if (!req.file) {
            throw new Error('No file')
        } else {
            const { mimetype } = req.file
            if (mimetype === 'image/png' || mimetype === 'image/gif' || mimetype === 'image/jpg') {
                res.status(201).json({ message: 'Succes' })
            } else {
                throw new Error('Only allowed to post png, gif or jpg')
            }

        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


module.exports = {
    uploadMedia,
}