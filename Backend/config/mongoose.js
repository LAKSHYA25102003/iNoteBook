const mongoose=require("mongoose");

 const connectToMongo=()=>{
         mongoose.connect("mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false",()=>{
         console.log("connected to mongo successfully");
     })
 }

 module.exports=connectToMongo;