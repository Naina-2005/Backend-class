const express = require("express");
const app = express();

// app.get("/profile",(req,res)=>{
//     const {username,age} =req.query;
//     console.log(username);
//     res.send("profile page of" + " "+username+" "+age);   //http://localhost:3456/profile?username=naina&age=23
// })

app.get("/profile/:id/:username",(req,res)=>{
    const {id,username} = req.params;
    //find in database
    res.send("profile page of"+ " "+id+ " "+username);
})

app.listen(3656,(req,res)=>{
    console.log("server started...");
})