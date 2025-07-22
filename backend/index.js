const express =require("express");
const Connect = require("./Db/DBconnect.js");
const Produect = require("./Router/Produectrouter.js");
const Register = require("./Router/UserRouter.js");
const Addtocart= require("./Router/Addtocart.js")
const Order= require("./Router/Order.js")
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app =express();
Connect()

const port = process.env.PORT
app.use(express.json())
app.use("/public", express.static("public"));
app.use(cors({origin:["https://forend.onrender.com"],credentials:true}))
// app.use(cors({
//   origin: ["http://localhost:5173", "https://maharajan-t-shirt.onrender.com"],
//   credentials: true
// }));

app.use(cookieParser())
app.use(Order)
app.use(Register)
app.use(Addtocart)
app.use(Produect)
app.listen(port,()=>{
    console.log(`server is running this ${port}`)
})