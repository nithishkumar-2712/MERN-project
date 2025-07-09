const  OrderModel = require("../Schema/OrderSchema.js")


 const Orderplaced=async(req,res)=>{
   const { product, price,qut} = req.body;
   const userId=req.body.userId
   const userName=req.body.userName
    try {
        const data= await OrderModel.create({product,price,qut,userId,userName})
        console.log(data)
        res.json({success:true,message:"successfully orderplace",data})
    } catch (error) {
        res.json({success:false,message:error.message})
        
    }
 }
 const Orderfethch = async (req,res) => {
  const userId=req.body.userId
  try {
    const data = await OrderModel.find({userId}).populate("product")  ;
    // console.log(data)
    res.json({
      success: true,
      data,
      message:data.message,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
 const Allorder = async (req,res) => {
  try {
    const data = await OrderModel.find().populate("product")
    console.log(data)
    res.json({
      success: true,
      data,
      message:"successfully get orders",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
module.exports={
    Orderfethch,
    Orderplaced,
    Allorder
}