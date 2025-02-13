const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("")

app.get('/',(req,res)=>{
    console.log("Get API")
    res.send({status:"success"})
})

app.listen(3000,()=>{
    console.log("Server is running on port no. 3000")
})