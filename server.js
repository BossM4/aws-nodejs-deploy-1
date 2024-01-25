const express = require("express");
const app = express();
const PORT =8000

app.get('/api/get', (req,res)=> {
    res.send({message:"Hello Backend Node JS"})
})

// api login page
app.get('/api/login', (req,res)=> {
    res.send({message:"This is Login pages"})
})

// api Register page
app.get('/api/register', (req,res)=> {
    res.send({message:"This is Registrer pages"})
})

// time clock
app.get('/api/time', (req,res)=> {
    res.send({message:"This is TIME Clock pages"})
})

app.get('/api/get_user_details',(req,res)=> {
    res.send({
        user:{
            name:'Nattapong',
            Position:'BOSS',
            contact:'0987654321',
            age:1000
        }
    })
})
    
app.listen(PORT, ()=> {
    console.log("Server running on port ",PORT)
})
