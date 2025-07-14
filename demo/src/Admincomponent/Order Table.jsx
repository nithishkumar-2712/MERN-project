import React from 'react';
import axios from '../config/axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function OrderTable() {
const [order,setOreder]=useState([])
const navigate=useNavigate()
 const Ordertable=async()=>{
  try {
    const {data}= await axios.get("/Allorder")
    if(data.success){
      setOreder(data.data)
    }else{
      toast.warning(data.message)
      console.log(data.message)
      navigate("/")
    }
  } catch (error) {
    console.log(error.message)
  }
 }
 useEffect(()=>{
  Ordertable()
 },[])

  return (
    <div className="container mt-5">
      <h2>📦 Placed Orders</h2>
      <table className="table table-bordered table-hover table-responsive">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>productName</th>
            <th>Customer</th>
            <th>Qty</th>
            <th>Price ₹</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src={`https://aathia-backend.onrender.com${item.product.file}`} width={100} height={100}/></td>
              <td>{item.product.name}</td>
              <td>{item.userName}</td>
              <td>{item.qut}</td>
              <td>{item.price}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
