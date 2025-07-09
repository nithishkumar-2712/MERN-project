const AllproduectModel = require("../Schema/ProduectSchema.js")

const createproduect=async(req,res)=>{
    const{name,price,about,seller,stock}=req.body
    const file= req.file
    if(!file){
        return res.json({success:false, message:"image file is not req"})
    }
    try {
        const data=await AllproduectModel.create({name,price,about,seller,stock,file:`/public/image/${file.filename}`})
         res.json({success:true,data,message:"successfully imageuploadeing"})   
        } catch (error) {
           res.json({success:false,message:error.message})
        
    }
 }
  const Fetchproduect=async(req,res)=>{
     const limit = parseInt(req.query._limit) || 10;
  const page = parseInt(req.query._page) || 1;
  const skip = (page - 1) * limit;
    try {
         const data=await AllproduectModel.find({check:true}).limit(limit).skip(skip);
         const total= await AllproduectModel.countDocuments({check:true})
         const totalpage=  Math.ceil(total/limit) 
         res.json({success:true,data,total,totalpage,message:"successfully get ALLproduect"})
        } catch (error) {
           res.json({success:false,message:error.message})
        
    }
 }
  const Adminproduect=async(req,res)=>{
    try {
         const data=await AllproduectModel.find()
         res.json({success:true,data,message:"successfully get ALLproduect"})
        } catch (error) {
           res.json({success:false,message:error.message})
        
    }
 }
 const deleteprouct=async(req,res)=>{
   const id= req.params.id
   console.log(id)
   try {
      const data=await AllproduectModel.findByIdAndDelete(id)
      res.json({success:true,data,message:"successfully delete produect"})
   } catch (error) {
      res.json({success:false,message:error.message})
      
   }
 }
const updateProductCheck = async (req, res) => {
  const { id } = req.params;
  const { check } = req.body;
  console.log(req.body)

  try {
    const updatedProduct = await AllproduectModel.findByIdAndUpdate( id,{ check });
    res.json({ success: true, message: "Product updated successfully", data: updatedProduct });
  } catch (error) {
    console.error("Update Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

 module.exports={
    Fetchproduect,
    createproduect,
    deleteprouct,
    updateProductCheck,
    Adminproduect
 }