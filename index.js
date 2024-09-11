const router=require('./Router/router')
//1) import dotenv module
require('dotenv').config()

//2) import express modules
const express= require('express')

//3) import cors module
const cors= require('cors')

//4) create server using express 
const pfServer= express()

//5) inject cors into pfserver 
pfServer.use(cors())


//6) use middleware  to covert  JSON data to js object

pfServer.use(express.json())
pfServer.use(router)
// provide a port 
const PORT=4000;

//8) run the server
pfServer.listen(PORT,()=>{
    console.log(`server is running in PORT ${PORT}`);
    
})

pfServer.get(`/`,(req,res)=>{
    res.send('server is running .... /')
})