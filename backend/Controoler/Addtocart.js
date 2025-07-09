const AddtocartModel = require("../Schema/Addtocartschema.js")
const createAddtocart=async(req,res)=>{
    const{id,price}=req.body;
    const userId = req.body.userId;
    const userName = req.body.userName;
    // console.log(req.body)
    try {
      const same= await AddtocartModel.findOne({ product:id, userId,userName})
      if(same){
        return res.json({success:false,message:"this produect allready inside the cart"})
      }
        const data=await AddtocartModel.create({product:id,subTotal:price, userId,userName})
         res.json({success:true,data,message:"successfully post"})   
        } catch (error) {
           res.json({success:false,message:error.message})
        
    }
 }
 const Fetchcartproduect = async (req, res) => {
const userId = req.body.userId;

  try {
    const data = await AddtocartModel.find({userId:userId}).populate("product");
    res.json({
      success: true,
      data,
      message: "Successfully fetched all cart products",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

  const Deletesingleproduect=async(req,res)=>{
    const id= req.params.id
    // console.log(req.params.id)
    try {
         const data=await AddtocartModel.findByIdAndDelete(id)
         res.json({success:true,data,message:"successfully delete single delete"})
        } catch (error) {
           res.json({success:false,message:error.message})
        
    }
 }
const  updateCart=async(req,res)=>{
  const {type,id}=req.body;
  try {
    const cart= await  AddtocartModel.findById(id).populate("product")
    if(type=="increment"){
      const updata= await AddtocartModel.findByIdAndUpdate(id,{$set:{quantity: cart.quantity + 1}, subTotal: cart.subTotal+ cart.product.price})
    }
    if(type=="decrement"){
      const updata= await AddtocartModel.findByIdAndUpdate(id,{$set:{quantity: cart.quantity - 1}, subTotal: cart.subTotal - cart.product.price})
    }
    res.json({success:true,message:"successfully updatacart produect"})
  } catch (error) {
    res.json({success:false,message:error.message})
  }
}
 module.exports={
    Fetchcartproduect,
    createAddtocart,
    Deletesingleproduect,
    updateCart
 }