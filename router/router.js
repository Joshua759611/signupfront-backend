const { request, response } = require('express')

//import the schema from signupmodels.js
const signUpTemplateCopy=require('../models/signupmodels')
const bcrypt=require('bcrypt')
const express =require('express')
const router=express.Router()
router.post('/signup"',async(request,response)=>{
    const saltPassword=await bcrypt.genSalt(10)
    const securePassword=await bcrypt.hash(request.body.password, saltPassword)


    /*creating a variable signedUpUsers which is an instance of signUpTemplateCopy such that when the
    user signs up on signup page it is going to create an instance of the signedUpUsers*/
    const signedUpUsers=new signUpTemplateCopy({
        fullName:request.body.fullName,//this means grab the fullName from the body of the request the user has made
        userName:request.body.userName,
        email:request.body.email,
        password:securePassword
    })
    signedUpUsers.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})
module.exports=router