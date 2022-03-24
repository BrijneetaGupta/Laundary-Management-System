const express = require('express')
const Port = process.env.PORT || 9002
const connection = require("./DatabaseConnection/connection")
const userRouter = require("./Router/UserRegister")
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(userRouter)

app.listen(Port,()=>{
    console.log(`App is listening on port ${Port}`)
})