import React, { useEffect, useState } from 'react'
import axios from '../config/axios'
import"../App.css"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
 function About() {
    const navigate=useNavigate()
    const[count,setCount]=useState([])
    const Addtocart=async()=>{
      try {
        const{data}= await axios.get("/fecthaddtocart")
        if(data.success){
          setCount(data.data)

        } else{
          toast.warning(data.message)
          navigate("/Register")
          // console.log(data.message)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    useEffect(()=>{
      Addtocart()
  
    },[])
    const handledelete=async(id)=>{
      // console.log(id)
      try {
        const{data}= await axios.delete(`/deletesingle/${id}`)
        if(data.success){
          toast.success(data.message)
            Addtocart()
        }else{
          toast.warning(data.message)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    const handleorder=async(productId,subTotal,quantity)=>{
      console.log(productId,subTotal)
   
      try {
        const{data}= await axios.post("/order",{product:productId,price:subTotal,qut:quantity})
        if(data.success){
          toast.success("successfully produect order")
        }else{
          toast.warning(data.message)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    const updateQuantity= async (item,type)=>{
      console.log(item)

  try {
    const {data} = await axios.put("/updateCart",{type,id: item._id});
    if(data.success){
       Addtocart()
    }else{
      toast.warning(data.message)
    }
  } catch (error) {
    console.log(error)
  }
}
  return (
  
       <div className="About">
       <div className="container mt-5">
  <div className="row">
    {count.length>0?count.map((item,index)=>(
      <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>

    <div className="card dig animate__animated animate__fadeInLeft">
      <img src={`https://backend-880n.onrender.com${item.product.file}`} className="card-img-top imgager" alt="..."/>
      <div className="card-body bg-black">
        <p className="card-text text-light font-family">S:NO:{index+1}</p> 
        <h5 className="card-title text-light font-family">NAME:{item.product.name}</h5>
        <p className="card-text text-light font-family">SELLER:{item.product.seller}</p>
        <button  className='btn bg-light text-dark' disabled={item.quantity>=item.product.stock}  onClick={()=>updateQuantity(item,"increment")}>+</button>
        <span className='text-light'>{item.quantity}</span>
        <button className='btn bg-light text-dark' disabled={item.quantity<=1} onClick={()=>updateQuantity(item,"decrement")}>-</button>
        <p className="card-text text-light font-family">STOCK:{item.product.stock}</p>
        <p className="card-text text-light font-family">PRICE:{item.product.price}</p>
        <p className="card-text text-light font-family">SUBTOTAL:{item.subTotal}</p>
        <p className="card-text text-light font-family">QUANTITY:{item.quantity}</p>
        {/* <p className="card-text text-light font-family">userId:{item.userId}</p> */}
        <p className="card-text text-light font-family"><small className=" text-light font-family"> ABOUT:{item.product.about}</small></p>
        <a href="#" className="btn btn-danger" onClick={()=> handledelete(item._id)}> REMOVE</a><br></br>
        <a href="#" className="btn btn-success" onClick={()=>handleorder(item.product._id,item.subTotal,item.quantity)}>ORDER</a>
    </div>
      </div>

    </div>
    )):<h1 className='text-light'>You cart is empty:</h1>}
  </div>
</div>
</div>
  
  )
}
export default About