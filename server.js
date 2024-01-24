const express = require("express");
const app = express();
const port =8000;

app.get('/api/get', (req,res)=> {
    res.send({message:"Hello Backend Node JS"})
})

app.get('/api/get_user_details'(req,res)=> {
    res.send({
        user:{
            name:"Nattapong",
            Position:'BOSS',
            contact:'0987654321'
        }
    })
})

app.listen(port, ()=> {
    console.log("Server running on port",port)
})