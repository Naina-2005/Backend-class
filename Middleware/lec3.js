const express = require("express");
const app= express();


let userData = [
    {
        id:1,
        name:"Nitesh",
        address:"delhi",

    },
    {
        id:2,
        name:"Ritik",
        address:"faridabad",
    },
    {
        id:3,
        name:"yatin",
        address:"Punjab",
    },
]

app.get("/allusers",(req,res)=>{
    res.send(userData);
})

app.get("/getuserbyId",(req,res)=>{
   // const id = req.query.id
   const {id} = req.query;
   for(let i=0;i<userData.length;i++){
    if(userData[i].id == id){
        return res.send(userData[i])
    }
   }
   res.send("user not found");
})

app.get("/adduser",(req,res)=>{
    const {id,name,address} = req.query;
    console.log(id,name,address);

    let newUser = {
        id: id,
        name: name,
        address: address

    }
    userData.push(newUser);
    res.end("user added successfully");
})

 app.listen(2345,()=>{
        console.log("server started")
     })
    

