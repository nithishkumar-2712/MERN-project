import React, { useEffect, useState } from 'react'
import axios from '../config/axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
 function Userinfo() {
  const [updataid,setUpdataid]=useState()
  const [updata,setUpdata]=useState([])
     const[user,setUser]=useState([])
     const navigate=useNavigate()
  const userdetelis=async()=>{
    try {
      const{data}= await axios.get("/getuser")
      if(data.success){
        setUser(data.data)
      } else{
        toast.warning(data.message)
        navigate("/")
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    userdetelis()
    // console.log("first")
  },[])
  const handledelete=async(id)=>{
    const Removeuserinfo=confirm("delete a user")
    if(Removeuserinfo==1){

      try {
        const {data}= await axios.delete(`/delete/${id}`)
        if(data.success){
          toast.success(data.message)
          userdetelis()
        }else{
          toast.success(data.message)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    }
    
  const handlerole = async () => {
    console.log(updata)
    console.log(updataid)
    try {
      const { data } = await axios.put(`/updaterole/${updataid}`, { role: updata });
      console.log(data)
      if (data.success) {
        toast.success("Role updated successfully!");
        setUpdataid(null);
        setUpdata('');
        userdetelis();
      } else {
        toast.warning(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
       <div className="container mt-5">
      <h2>👤 User Table</h2>
      <table className="table table-bordered table-striped container table-responsive">
        <thead className="table-dark">
          <tr>
            <th>S:NO</th>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
             <th>Actions</th>
             <th>Edit</th>
             <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              {/* <td>{item._id}</td> */}
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              {updataid===item._id?(

                <td>
                <input defaultValue={item.role} value={updata} onChange={(e)=>setUpdata(e.target.value)}   className="form-control form-control-sm me-2"
                />
                <button className='btn' onClick={()=>setUpdataid(null)}>remove</button>
                <button className='btn' onClick={handlerole}>updata</button>
                </td>
              ):(<>
                <td>{item.role}</td>
                <td><button className='btn bg-warning' onClick={()=>setUpdataid(item._id)}>Edit</button></td>
                <td><button className='btn bg-danger text-light' onClick={()=> handledelete(item._id)}>Delete</button></td>
              </>
              )

              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
export default Userinfo