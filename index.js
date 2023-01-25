const express = require("express");

const app = express();

const PORT=3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Server is up and running",
    })
})
app.get("*",(req,res)=>{
    res.status(404).json({
        "message": "This route does not exist"
    })
})

app.listen(PORT, ()=>{
    console.log("Stsrt server");
})