const express = require('express')
const app = express();
const tasks = require('./Router/tasks') //imp routes
const connectDB = require('./database/connect')
require('dotenv').config()
const error = require('./Middleware/error')
const errorHandler = require('./Middleware/erro-handler')
const PORT = 5001


//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks',tasks)
app.use(error)
app.use(errorHandler)

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,()=>{
        console.log(`Running on port ${PORT}`)
})
    } catch (error) {
        console.log(error)
    }
}

start();

