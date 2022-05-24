const connectToMongo=require("./config/mongoose.js");
connectToMongo();


const port=3000;
const express=require("express");
const app=express();

// for parsing data coming with req body
app.use(express.json());


app.get("/",function(req,res){
    res.send("hello world");
})

app.use("/api/auth",require("./routes/auth"));
app.use("/api/notes",require("./routes/notes"));

app.listen(port,function(){
    console.log(`Express server is started successfully on the port:${port}`);
});