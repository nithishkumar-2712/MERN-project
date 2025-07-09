const multer =require("multer");
const path = require ("path")
 const storage=multer.diskStorage({
    destination:(req,File,cb)=>{
        cb(null,"public/image")
    },
    filename:(req,File,cb)=>{
        cb(null, File.fieldname+"_"+Date.now()+ path.extname(File.originalname))
    }
 })
 const maxAge=2*100*1000
const uploade=multer({
    storage:storage,
    limits:{
        fielSize:maxAge
    }
})
module.exports=uploade;