const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
const workoutRoutes = require('./v1/routes/workoutRoutes')

app.use(express.json())

app.use('/api/v1/workouts' , workoutRoutes)


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
