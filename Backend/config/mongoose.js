const mongoose=require("mongoose");

const uri=`mongodb+srv://lakshya:{secrets.DATA_BASE}`;

 const connectToMongo=()=>{
         mongoose.connect(uri,(err)=>{
         if(err)
         {
             console.log("Data base is not connected");
         }
         else
         {
            console.log("connected to mongo successfully");
         }
     })
 }

 module.exports=connectToMongo;
