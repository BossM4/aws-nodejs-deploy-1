const express = require("express");
const app = express();
const PORT =8000
// require("dotenv").config

app.get('/api/get', (req,res)=> {
    res.send({message:"Hello Backend Node JS"})
})

// api login page
app.get('/api/login', (req,res)=> {
    res.send({message:"This is Login pages"})
})

app.get('/api/register', (req,res)=> {
    res.send({message:"This is Registrer pages"})
})

<<<<<<< HEAD
app.listen(PORT, ()=> {
    console.log("Server running on port ",PORT)
})
=======
// time clock
app.get('/api/time', (req,res)=> {
    res.send({message:"This is TIME Clock pages"})
})

app.listen(port, ()=> {
    console.log("Server running on port",port)
})
>>>>>>> 062a7174381fec86adcf6ee04c5ebb42601776fe
