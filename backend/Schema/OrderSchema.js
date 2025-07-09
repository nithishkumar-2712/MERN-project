const mongoose = require("mongoose")
const Order= new mongoose.Schema({
 
   product: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "product" // Must match model name here exactly
},
 userId:{
      type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
      userName: {                 // 👈 add this if you want to store name
    type: String
  },
    price: {
    type: Number,
    required: true
  },
    qut: {
    type: Number,
    required: true
  },
  
  status: {
    type: String,
    default: "Placed" // Could be Placed, Shipped, Delivered, etc.
  },
  date: {
    type: Date,
    default: Date.now
  }
})
const OrderModel=mongoose.model("Order",Order)
module.exports=OrderModel