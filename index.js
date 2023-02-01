const express = require("express");
const {users} = require("./data/users.json")

const app = express();

const PORT=3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Server is up and running",
    })
});

/*
    Route : /users
    Method : GET
    Description : Get all users
    Access : Public
    Params : None
*/



app.get('/users', (req,res)=>{
    res.status(200).json({
        success: true,
        data: users
    })
})

/*
    Route : /users/:id
    Method : GET
    Description : Get single users by id
    Access : Public
    Params : id
*/

app.get('/users/:id',(req,res)=>{
    const {id} = req.params
    const user = users.find((each)=> each.id=== id);
    if(!user){
        return res.status(404).json({
            success:false,
            message: "User Not Found "
        })
    }
    return res.json({
        success: true,
        data:user
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