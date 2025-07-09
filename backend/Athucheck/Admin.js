 const registerModel = require("../Schema/RegisterSchema.js")
 const Admin=async(req,res,next)=>{
    const userId=req.body.userId;
    // console.log(userId)
    try { 
        const data=await registerModel.findById(userId)
        // console.log(data.role)
        if(data.role==="user"){
            return res.json({success:false,message: "Admin only access this rount"})
        }
            next()
    } catch (error) {
     res.json({success:false,message:error.message})
      
    }
 }
  module.exports=  Admin