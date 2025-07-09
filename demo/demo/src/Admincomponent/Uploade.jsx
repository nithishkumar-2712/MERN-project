import { useForm } from "react-hook-form";
import React from 'react'
import { useState } from "react";
import axios from "../config/axios";
import { useRef } from "react";
import { toast } from "react-toastify";

 function Uploade() {
    const[file,setFile]=useState()
    const[filename,setFilename]=useState("")
    const inputvalue=useRef("")
    const{register,handleSubmit,reset}=useForm()
    const Savefile=()=>{
        setFile(inputvalue.current.files[0]);
        setFilename(inputvalue.current.files[0].name);
    }
    const onsubmit=async(item)=>{
        console.log(item)
        const formdata= new FormData();
        formdata.append("file",file)
        formdata.append("filename",filename)
        formdata.append("name",item.name)
        formdata.append("price",item.price)
        formdata.append("about",item.about)
        formdata.append("stock",item.stock)
        formdata.append("seller",item.seller)
        try {
            const{data}=await axios.post("/upload",formdata)
            if(data.success){
                toast.success("successsfully uploade the produet")
                // reset()
            }else{
                toast.warning(data.message)
                
            }
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <>
    <div className=" container  mt-5 backgroundimage">
    <h1 className="text-success font-family">Add The Produect:</h1>
    <form onSubmit={handleSubmit(onsubmit)} className="contariner registerr" >
        <label className="font-family">ENTER YOU PRODUCT NAME:</label><input className="form-control font-family" placeholder="name" type="text" {...register("name")}/><br></br>
        <label className="font-family">ENTER YOU PRODUCT ABOUT:</label> <input className="form-control font-family" placeholder="about" type="about" {...register("about")}/><br></br>
        <label className="font-family">ENTER YOU PRODUCT PRICE:</label><input className="form-control font-family" placeholder="price" type="number" {...register("price")}/><br></br>
        <label className="font-family">ENTER YOU PRODUCT STOCK:</label> <input className="form-control font-family" placeholder="stock" type="number" {...register("stock")}/><br></br>
        <label className="font-family">ENTER YOU PRODUCT SELLER:</label> <input className="form-control font-family" placeholder="seller" type="text" {...register("seller")}/><br></br>
        <label className="font-family">UPLOADE YOU PRODUCT:</label><input placeholder="image" type="file" ref={inputvalue} onChange={Savefile} /><br></br>
        <button className="btn text-light bg-dark font-family">Upload</button>
    </form>
    </div>
      
    </>
  )
}
export default Uploade