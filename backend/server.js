const express=require('express');
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=express()

dotenv.config()
app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(3001)