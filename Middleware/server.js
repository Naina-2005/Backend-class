const express = require("express");
const app = express();

app.use(m1);   //every request
//app.use(m2);

app.get("/",(req,res)=>{
    res.send("server is running...");
});
app.use(m2);


app.get("/about",m3,(req,res)=>{
    res.send("running in about");
});


function m1(req,res,next){
    console.log("running m1");
    next();
}
    
function m2(req,res,next){
    console.log("running m2");
    next();
}
function m3(req,res,next){
    console.log("running m3....");
    next();
}

function m4(req,res,next){
    console.log("Running middleware 4");
    next();
}

app.listen(1500,()=>{
    console.log("server is running...");
})




