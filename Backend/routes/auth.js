const express=require("express");
const router=express.Router();
const User=require("../models/User");

// create user using post request and it does not require authentication

router.post("/",(req,res)=>{
    console.log(req.body);
    const user=User(req.body);
    user.save();
    // User.create({
    //     name:req.body.name,
    //     email:req.body.email,
    //     password:req.body.password
    // },function(err,user){
    //     if(err)
    //     {
    //         console.log("error in creating account");
    //     }
    // });
    res.send(req.body);
})

module.exports=router;