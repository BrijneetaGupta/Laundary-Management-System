const bcrypt = require('bcryptjs')
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const UserregisterSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Phone:{type:Number,required:true,min:10,unique:true},
    State:{type:String,required:true},
    District:{type:String,required:true},
    Address:{type:String,required:true},
    Pincode:{type:Number,required:true},
    Password:{type:String,required:true},
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})
UserregisterSchema.methods.generateToken = async function(){
    try{
        const newtoken = jwt.sign({_id:this._id},"ThenameofprojectisLaundryService");
        this.tokens=this.tokens.concat({token:newtoken})
        await this.save()
        return newtoken
    }catch(error){
        res.send(error)
    }
}
// for bcrypt password....
UserregisterSchema.pre("save",async function(next){
    if(this.isModified("Password")){
    this.Password = await bcrypt.hash(this.Password,12);
    }
next()
})
// create collection name with the help of models
const UserData = new mongoose.model("UserData",UserregisterSchema);
module.exports=UserData;