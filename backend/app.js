const mongoose = require('mongoose')
const db = "mongodb+srv://laundryService_2022:987654321@cluster0.phrjj.mongodb.net/LaundryService?retryWrites=true&w=majority"
mongoose.connect(db).then(()=>{
    console.log("Connection is successful")
}).catch((err)=>{
    console.log(err)
})