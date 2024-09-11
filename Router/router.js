// import express module
const express= require('express')
//router library is inside the exprss
const router =new express.Router()
const userController = require('../Controllers/userController.js')

// different path,resolve
router.post('/user/resgister',userController.register)
router.get('/user/getdetails',userController.getUserDetails)


module.exports=router