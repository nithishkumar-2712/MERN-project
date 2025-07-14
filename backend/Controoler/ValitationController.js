const registerModel = require("../Schema/RegisterSchema.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();
 const Registeruser=async(req,res)=>{
    const{name,email,password,age}=req.body
    try {
        const same=await registerModel.findOne({email:email})
        if(same){
            return res.json({success:false,message:"this email was already register change email"})
        }
        const hasspassword=  await bcrypt.hash(password,10)
        const data=await registerModel.create({name,email,password:hasspassword,age})
        const token=jwt.sign({id:data._id},process.env.JWT_SECRET,{expiresIn:"8d"})
        res.cookie("token",token,{ httpOnly: true,maxAge: 24 * 60 * 60 * 1000,})
         res.json({success:true,data,message:"User registered successfully"})
        } catch (error) {
           res.json({success:false,message:error.message})
        
    }
 }

 const Fecthuser=async(req,res)=>{
    try {
         const data=await registerModel.find({check:true})
         res.json({success:true,data,message:data.message})
        } catch (error) {
           res.json({success:false,message:error.message})
        
    }
 }

 
 const Loginuser=async(req,res)=>{
    const{email,password}=req.body
    try {
        const checkemail= await registerModel.findOne({email:email})
        if(!checkemail){
            return res.json({success:false,message:"this email is incorrect"})
        }
        const checkpassword=await  bcrypt.compare(password,checkemail.password)
        if(!checkpassword){
            return res.json({success:false,message:"this password is incorrect"})

        }
        const token=jwt.sign({id:checkemail._id},process.env.JWT_SECRET,{expiresIn:"8d"})
        res.cookie("token",token,{ httpOnly: true,maxAge: 24 * 60 * 60 * 1000,})
         res.json({success:true,message:"successfully login"})
        } catch (error) {
           res.json({success:false,message:error.message})
           
        }
    }
 const Logout=async(req,res)=>{
        try {
            res.clearCookie("token",{
                httpOnly:true
            })
            res.json({success:true,message:"successfully logout"})
        } catch (error) {
        res.json({success:false,message:error.message})
        
    }
 }
 const deleteuserinfo=async(req,res)=>{
    const id= req.params.id;
    // console.log(req.params.id)
    try {
        const data= await registerModel.findByIdAndDelete(id)
        res.json({success:true,data, message:"successfully delete produect"})
    } catch (error) {
        res.json({success:false, message:error.message})
        
    }
 }
 const updatauser=async(req,res)=>{
     try {
    const user = await registerModel.findByIdAndUpdate(
      req.params.id,
      { role: req.body.role },
      { new: true }
    );
    res.json({ success: true, data: user, message: "Role updated" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};
 
 module.exports = {
  Registeruser,
  Fecthuser,
  Loginuser,
  Logout,
  deleteuserinfo,
  updatauser
};