const mongoose= require("mongoose")
require("dotenv").config();
const Connect=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Mongodb is connect")
    } catch (error) {
        console.log(error.message)
    }
 }
 module.exports=Connect