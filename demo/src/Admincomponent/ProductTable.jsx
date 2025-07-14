import React, { useEffect, useState } from 'react'
import axios from '../config/axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function ProductTable() {
    const navigate=useNavigate()
    const[editid,setEditid]=useState(null)
    const[editCheck,setEditCheck]=useState(false)
    const[count,setCount]=useState([])
    // GET method  API
const uplodeing=async()=>{
    try {
      const{data}= await axios.get("/Admin")
      if(data.success){
            setCount(data.data)
            // toast.success(data.message)
      } else{
            toast.warning(data.message)
            navigate("/")
      }
    } catch (error) {
          console.log(error.message)
    }
  }
useEffect(()=>{
        uplodeing()
},[])
  // Delete methode API
const handledelete=async(id)=>{
  console.log(id)
  // const Removeitems= confirm(" delete a product")
  // if(Removeitems===1){
    try {
      const{data}= await axios.delete(`/deleteitem/${id}`)
      console.log(data)
      if(data.success){
        toast.success(data.message)
        uplodeing()
      }else{
        toast.warning(data.message)
      }
    } catch (error) {
      console.log(error.message)
    }
  // }
}
const handleUpdate = async (id,editCheck) => {
  console.log(editCheck)
  try {
    const { data } = await axios.put(`/updateproduct/${id}`,{ check: editCheck });
    console.log(data)
    if (data.success) {
      toast.success("Product updated");
      setEditid(null);
      uplodeing();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error.message);
  }
};



  return (
    <div className="container mt-5">
      <h2 className='font-family'>📦 Product Table</h2>
      <table className="table table-bordered table-hover table-responsive">
        <thead className="table-dark">
          <tr>
            <th className='font-familyy'>#</th>
            <th className='font-familyy'>image</th>
            <th className='font-familyy'>Product Name</th>
            <th className='font-familyy'>Price ₹</th>
            <th className='font-familyy'>Stock</th>
            <th className='font-familyy'>Actions</th>
            <th className='font-familyy'>Edit</th>
            <th className='font-familyy'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {count.map((item, index) => (
            <tr key={index}>
              <td className='font-family'>{index + 1}</td>
              <td> <img src={`https://aathia-backend.onrender.com${item.file}`} width={150} height={110}/></td>
              <td className='font-family'>{item.name}</td>
              <td className='font-family'>{item.price}</td>
              <td className='font-family'>{item.stock}</td>
            
              {editid===item._id?(
              
                <td colSpan={3}>

                <input defaultValue={item.check}   className="form"   value={editCheck}// this should be a boolean
      onChange={(e) => setEditCheck(e.target.value)}/>
                <button className='btn bg-danger text-dark' onClick={()=>setEditid(null)}>Remove</button>
                <button className='btn bg-success text-dark'  onClick={() => handleUpdate(item._id,editCheck)} >update</button>
   
      </td>
            
                
              ):(
            <>
              <td className='font-family'>{item.check}</td>
              
              <td>
                <button className="btn btn-warning btn-sm me-2 font-family" onClick={()=>setEditid(item._id)}>Edit</button>
                </td>
                <td>  
                <button className="btn btn-danger btn-sm font-family" onClick={()=>handledelete(item._id)}>Delete</button>
              </td>
            </>
             
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
                