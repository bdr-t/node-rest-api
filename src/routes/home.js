const express = require('express')
const {getDate} = require('../controllers/home')

const router = express.Router()

router.post('/', getDate)

module.exports = {
    homeRoutes: router
 }