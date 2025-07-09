import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Context from './Component/Context';
import Register from './Component/Register';
import Error from './Component/Error';
import Uploade from './Admincomponent/Uploade';
import Userinfo from './Admincomponent/Userinfo';
import ProductTable from './Admincomponent/ProductTable';
import OrderTable from './Admincomponent/Order Table';
import Navbar from './Pages/Navbar';
import axios from './config/axios';
import { ToastContainer, toast } from 'react-toastify';
export const AppContext =createContext(); 
function App() {
  const[islogin,setislogin]=useState("")
  const  checkToken =async()=>{
    try {
      const{data}=await axios.get("/token")
      if(data.success){
            // alert("successfully")
            setislogin(true)
            // console.log(islogin)
      }else{
            // alert(data.messsage)
            setislogin(false)
            // console.log(islogin)
      }
    } catch (error) {
            console.log(error.messsage)
    }
  }
useEffect(()=>{
    checkToken ()
},[])
  return (
     <AppContext.Provider value={{ islogin, checkToken }}> 
    <BrowserRouter>
    <Navbar/>
    <ToastContainer/>
      <Routes> 
        {/* User routers */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Context />} />
        <Route path="*" element={<Error/>} />
        <Route path="/Register" element={islogin?<Navigate to="/"/>:<Register/>} />
       
        {/* Admin routers */}
        <Route path="/Uploade" element={<Uploade/>} />
        <Route path="/Userinfo" element={<Userinfo/>} />
        <Route path="/ProductTable" element={<ProductTable/>} />
        <Route path="/OrderTable" element={<OrderTable/>} />          
      </Routes>
    </BrowserRouter>
     </AppContext.Provider>
  );
}

export default App;
