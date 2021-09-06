const express = require('express')
const cors = require('cors')

const {userRoutes} = require('./routes/user.js')

const app = express()

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/user', userRoutes)

app.get('/', async (req, res)=>{
    res.json('Node rest api')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})