const express = require("express");
const app = express();
const port =8000;

app.get('/api/get', (req,res)=> {
    res.send({message:"Hello Backend Node JS"})
})

app.listen(port, ()=> {
    console.log("Server running on port",port)
})