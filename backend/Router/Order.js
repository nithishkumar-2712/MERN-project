const express = require ("express");
const { Orderplaced, Orderfethch, Allorder, fack } = require("../Controoler/Order.js");
const Athu = require("../Athucheck/Athu.js");
const Admin=require("../Athucheck/Admin.js")
const route=express.Router();
route.post("/order",Athu,Orderplaced)
route.get("/getorder",Athu,Orderfethch)
route.get("/Allorder",Athu,Admin,Allorder)
 module.exports =route 