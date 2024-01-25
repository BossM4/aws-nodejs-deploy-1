const express = require("express");
const app = express();
const port =8000;

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

// photo
app.get('/api/time', (req,res)=> {
    res.send({message:"This is Registrer pages"})
})

app.listen(port, ()=> {
    console.log("Server running on port",port)
})
