const express =require("express");
const { Fecthuser,Registeruser,Loginuser,Logout, deleteuserinfo, updatauser } = require("../Controoler/ValitationController.js");
const Admin = require("../Athucheck/Admin.js");
const Athu = require("../Athucheck/Athu.js");
// const { Usercheck } = require("../Athucheck/Usercheck.js");
const route= express.Router();
route.get("/getuser",Athu,Admin,Fecthuser)
route.get("/token",Athu,Fecthuser)
route.post("/Register",Registeruser)
route.post("/Login",Loginuser)
route.post("/Logout",Logout)
route.delete("/delete/:id",Athu,Admin,deleteuserinfo)
route.put("/updaterole/:id",Athu,Admin,updatauser)
module.exports= route