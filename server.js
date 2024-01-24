const express = require("express");
const app = express();
const PORT =8000
// require("dotenv").config

app.get('/api/get', (req,res)=> {
    res.send({message:"Hello Backend Node JS"})
})

app.get('/api/login', (req,res)=> {
    res.send({message:"This is Login pages"})
})

app.get('/api/register', (req,res)=> {
    res.send({message:"This is Registrer pages"})
})

app.listen(PORT, ()=> {
    console.log("Server running on port ",PORT)
})