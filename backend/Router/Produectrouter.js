const express = require ("express");
const uploade = require("../Multer/multer.js");
const { createproduect, Fetchproduect, deleteprouct, updateProductCheck, Adminproduect, } = require("../Controoler/Allproduect.js");
const Athu=require("../Athucheck/Athu.js");
const Admin = require("../Athucheck/Admin.js");
const route=express.Router();
route.post("/upload",Athu,Admin,uploade.single("file"),createproduect)
route.get("/fetch",Fetchproduect)
route.get("/Admin",Athu,Admin,Adminproduect)
route.delete("/deleteitem/:id",Athu,Admin,deleteprouct)
route.put("/updateproduct/:id",Athu,Admin,updateProductCheck)
 module.exports =route