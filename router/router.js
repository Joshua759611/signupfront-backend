const { request, response } = require('express')

//import the schema from signupmodels.js
const signUpTemplateCopy=require('../models/signupmodels')
const express =require('express')
const router=express.Router()
router.post('/signup"',(request,response)=>{
    //response.send('send')

    /*creating a variable signedUpUsers which is an instance of signUpTemplateCopy such that when the
    user signs up on signup page it is going to create an instance of the signedUpUsers*/
    const signedUpUsers=new signUpTemplateCopy({
        fullName:request.body.fullName,//this means grab the fullName from the body of the request the user has made
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