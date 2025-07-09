const mongoose = require("mongoose")
const productSchema= new mongoose.Schema({
    name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  about: {
    type: String,
    required: true,
    trim: true,
  },
  seller: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
  file: {
    type: String, // Example: "/public/images/product1.jpg"
    required: true,
  },
  check:{
    type: Boolean,
    default:true
  }
})
const productModel=mongoose.model("product",productSchema)
module.exports=productModel