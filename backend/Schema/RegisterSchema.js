const  mongoose =require("mongoose")
const userSchema =new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    // minlength: 6,
  },
  age: {
    type:Number,
    required: true,
    // minlength: 6,
  },
  check:{
    type:Boolean,
    default:true
    
  },
  role: {
        type: String,
        enum: ['user', 'admin'], 
        default: 'user'
      }

})
const registerModel=mongoose.model("Register",userSchema)
module.exports=registerModel