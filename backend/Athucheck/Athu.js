const jwt =require("jsonwebtoken")
const registerModel = require("../Schema/RegisterSchema")
// const { findById } = require("../Schema/OrderSchema")
require("dotenv").config();
 const Athu=async(req,res,next)=>{
    const{token}= req.cookies
    try {
        if(!token){
            return res.json({success:false, message:" place login first"})
        }
        const decode= jwt.verify( token,process.env.JWT_SECRET)
        if(decode.id){
            req.body = req.body || {};
            const user=await registerModel.findById(decode.id)
            if(user){
              req.body.userId=user._id
              req.body.userName=user.name
                //  console.log("Authenticated user:", req.body.userName);
              next()
            }else{

                return  res.json({success:false, message:"user is not found"})
            }
        }else{
           return  res.json({success:false, message:" if go login page"})
        }
    } catch (error) {
        res.json({success:false,message:error.message})
    }
 }

 module.exports= Athu