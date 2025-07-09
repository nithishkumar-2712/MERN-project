const mongoose = require("mongoose")
const Addtocart= new mongoose.Schema({

  
    product: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "product" // Must match model name here exactly
},
 userId:{
      type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },

    
subTotal:{
        type:Number,
        required:true
    },
     quantity:{
      type:Number,
      default:1
    },
})
const AddtocartModel=mongoose.model("Addtocart",Addtocart)
module.exports=AddtocartModel