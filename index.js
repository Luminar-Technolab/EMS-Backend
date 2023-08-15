require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./Routes/router');

const server = express()
server.use(cors())
server.use(express.json())
server.use(router)

const PORT = 4000 || process.env.PORT
//export uploads folder as a static file / folder
server.use('/uploads',express.static('./uploads'))
server.listen(PORT,()=>{
    console.log(`EMS Server started at port: ${PORT}`);
})

server.get('/',(req,res)=>{
    res.send(`<h1>EMS Server Started!</h1>`)
})