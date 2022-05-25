const express =require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const routesUrls=require('./router/router.js')
const cors= require('cors')
dotenv.config()
mongoose.connect(process.env.DATABASA_ACCESS,()=>console.log('Database Connected Successfully'))
const app= express()
app.use(express.json())//activating body-parser
app.use(cors)
app.use('/app',routesUrls)

app.listen(4000,()=>console.log('Server is up and running'))