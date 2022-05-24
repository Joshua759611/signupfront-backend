const { request, response } = require('express')
const signUpTemplateCopy=require('../models/signupmodels')
const express =require('express')
const router=express.router()
router.post('/signup"',(request,response)=>{
    //response.send('send')
    const signedUpUsers=new signUpTemplateCopy({
        fullName:request.body.fullName,
        userName:request.body.userName,
        email:request.body.email,
        password:request.body.password
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