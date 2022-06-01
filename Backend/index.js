const connectToMongo=require("./config/mongoose.js");
connectToMongo();


const port=5000;
const express=require("express");
var cors = require('cors')
const app=express();

// for parsing data coming with req body
app.use(cors())
app.use(express.json());


app.get("/",function(req,res){
    res.send("hello world");
})

// routes to provide correct router
app.use("/api/auth",require("./routes/auth"));
app.use("/api/notes",require("./routes/notes"));



// listening express server
app.listen(port,function(){
    console.log(`Express server is started successfully on the port:${port}`);
});