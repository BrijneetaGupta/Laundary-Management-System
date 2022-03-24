const mongoose = require('mongoose')
const db = "mongodb+srv://laundryService_2022:987654321@cluster0.phrjj.mongodb.net/LaundryService?retryWrites=true&w=majority"
const connection = mongoose.connect(db).then(()=>{
console.log("Database is connected...Conguratulations")
}).catch((err)=>{
 console.log("Database is not connected..")
})
module.exports = connection
