import React, { useState,useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form';
import axios from '../config/axios';
import './login.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../App';
function Register() {
  const{islogin, checkToken}=useContext(AppContext)
const[count,setCount]=useState(true)
const navigate=useNavigate()
const { register, handleSubmit, reset } = useForm();
const onSubmit =async(send) => {
    try {
      const{data}= await axios.post("/Register",send)
      if(data.success){
        toast.success('successfully user create')
        navigate("/")
        checkToken()
      }else{
        toast.warning(data.message)
      }
    } catch (error) {
      console.log(error.message)
    }
  };
  const onSubbmit=async(items)=>{
    try {
      const{data}=await axios.post("/Login",items)
      if(data.success){
        toast.success("successfully login")
        checkToken()
        navigate("/")
        token()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleclick=()=>{
    setCount(false)
    console.log(count)
  }
  return (
    <div className='body'>
    
    <div className=' register'>
    <div className='backgoundimage'>
      {count?(
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className=' font-family'>Register Login Form</h2>
      <label className='font-family'>Name:</label>
      <input placeholder='name'  className='form-control font-family' type='text'{...register('name')} />
      <label className='font-family'>Email:</label>
      <input  placeholder='Email' className='form-control font-family' type='email'{...register('email')} />
      <label className='font-family'>Password:</label>
      <input placeholder='password' type="password"  className='form-control font-family'{...register('password')} />
      <label className='font-family'>Age:</label>
      <input placeholder='age' type="number"  className='form-control font-family'{...register('age')} />
      <label className='font-family'>NUMBER:</label>
      <input placeholder='number' type="number"  className='form-control font-family'{...register('number')} />
      <button className="btn bg-success text-light font-family" type="submit">Submit</button><br></br>
      <button className="btn bg-danger text-light font-family" type="submit" onClick={handleclick}>LOGIN</button>
    </form>
    </>):(
      
      <>
      <div className=''>
       <form onSubmit={handleSubmit(onSubbmit)}>
        <h2 className=' font-family'>Register Login Form</h2>
      <label className='font-family'>Email:</label>
      <input  placeholder='Email' className='form-control font-family' type='email'{...register('email')} /><br></br>
      <label className='font-family'>Password:</label>
      <input placeholder='password' type="password"  className='form-control font-family'{...register('password')} /><br></br><br></br>
      <button className="btn bg-success text-light font-family" type="submit">LOGIN</button><br></br><br></br>
       </form>
       </div>
       </>)}
        </div>
         </div>
    </div>
  )
}

export default Register