const express = require('express')
const {uploadMedia} = require('../controllers/upload')

const router = express.Router()

router.post('/', uploadMedia)

module.exports = {
   uploadRoutes: router
}