const connectToMongo=require("./config/mongoose.js");
connectToMongo();


const port=3000;
const express=require("express");
const app=express();


app.get("/",function(req,res){
    res.send("hello world");
})

app.listen(port,function(){
    console.log(`Express server is started successfully on the port:${port}`);
});