const express = require ("express");
const { createAddtocart, Fetchcartproduect, Deletesingleproduect, updateCart } = require("../Controoler/Addtocart.js");
const Athu =require("../Athucheck/Athu.js")
const route=express.Router();
route.post("/creataddtocart",Athu,createAddtocart)
route.get("/fecthaddtocart",Athu,Fetchcartproduect)
route.delete("/deletesingle/:id",Athu,Deletesingleproduect)
route.put("/updateCart",Athu,updateCart)
 module.exports =route