import React, { useEffect, useState } from 'react'
import axios from '../config/axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

 function Context() {
  const navigate=useNavigate()
  const[count,setCount]=useState([])
const Orderfethch=async()=>{
  try {
    const{data}= await axios.get("/getorder")
    if(data.success){
      setCount(data.data)
    }else{
      toast.warning(data.message)
      navigate("/Register")
    }
  } catch (error) {
    console.log(error.message)
  }
}
useEffect(()=>{
  Orderfethch()
},[])

  return (
    <>
       <div className="container mt-5">
      <h2>📦 Your  Orders</h2>
      <table className="table table-bordered table-hover table-responsive">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            {/* <th>Customer</th> */}
            <th>Product</th>
            <th>ProductName</th>
            <th>Qty</th>
            <th>Price ₹</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {count.length>0?
          count.map((item,index) => (
            <tr key={index}>
              <td>{index+ 1}</td>
              <td><img src={`https://maharajan-t-shirt.onrender.com${item.product.file}`}  width={100} height={100}/></td>
              <td>{item.product.name}</td>
              <td>{item.qut}</td>
              <td>{item.price}</td>
              <td>{item.date}</td>
            </tr>
          )):<h1 className='text-dark'>You order is empty</h1>}
        </tbody>
      </table>
    </div>
  
    </>
  )
}
export default Context