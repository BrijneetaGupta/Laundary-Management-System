const express = require('express');
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const SECRET = "ThenameofprojectisLaundryService";
const app = express(); 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const cors = require('cors')
const userRouter = require("./Router/UserRegister")
const orders = require("./Router/orders")
app.use(cors())
const db = "mongodb+srv://laundryService_2022:987654321@cluster0.phrjj.mongodb.net/LaundryService?retryWrites=true&w=majority"
mongoose.connect(db).then(()=>{
    console.log("Connection is successful")
}).catch((err)=>{
    console.log(err)
})
//autherization for user logins
app.use("/orders",(req,res,next)=>{
    var token = req.headers.authorization.split("Bearer ")[1];
    console.log(token)
    if(!token){
        return res.status(401).json({
            status:"failed",
            message:"token is missing"
        })
    }
    jwt.verify(token,SECRET,function(err,decoded){
        if(err){
            return res.status(401).json({
                status:"failed",
                message:"invalid token"
            })
        }
        else{
            req.user = decoded.data
            next();
        }
    })
})
app.use(userRouter)
app.use('/',orders)
app.listen(process.env.PORT || 9002,()=>{ console.log(` server listening on ${5000}`);
})