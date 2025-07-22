import React, {useEffect, useState } from 'react'
import Carouser from '../Pages/Carouser'
import axios from '../config/axios'
import"../App.css"
import { toast } from 'react-toastify'
 function Home() {
  const[count,setCount]=useState([])
  const[totalpage,setTotalpage]=useState()
  const [loading, setLoading] = useState(true);
  const[total,setTotal]=useState()
  const pagenation=async(page)=>{   
    try {
      const{data}= await axios.get(`/fetch?_limit=9&_page=${page}`)
          if(data.success){
            setCount(data.data)
            setTotalpage(data.totalpage)
            setTotal(data.total)

          } else{
            toast.warning(data.message)
          }
      // uplodeing()
      
    } catch (error) {
      console.log(error)
    }finally {
    setLoading(false); // loading false
  }
  }
  useEffect(()=>{
    pagenation(1)

  },[])
  const handleclick=async( id,price)=>{
    try {
      const {data}= await axios.post("/creataddtocart",{id,price})
      if(data.success){
        toast.success("this produect in cart ")
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error.message)
      
    }
  }
  return (
    <>
    <Carouser/>

<div className='bg-dark'>
    <h1 className='h1 font-family font-size text-light'> Multi-Product</h1>
    <div className=' container'>
      <div className='row'>
            {loading ? (
        <div className="text-light text-center w-100">
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
      
      { count.map((item,index)=>(
        <div className=' col-12 col-md-6 col-lg-4 mb-4' key={item._id ||index}>
    
       <div className="card animate__animated animate__fadeInLeft" style={{width: "18rem"}}>
                <img src={`https://backend-880n.onrender.com${item.file}`} className="card-img-top imgage" alt="..." width={200} height={350}/>
      <div  className="card-body">
                <p className="card-text font-family"> S.NO: {index+1}</p>
               <h5 className="card-title font-family">NAME: {item.name}</h5>
                <p className="card-text font-family">SELLER: {item.seller}</p>
               <h5 className="card-title font-family">PRICE: {item.price}</h5>
                <button className="btn btn-primary font-family" onClick={()=>handleclick(item._id,item.price)}>Add To Cart</button>
      </div>
      </div>
      </div>
        ))}
       <div>
        <button className='btn specal' onClick={()=>pagenation(1)}>FIRST</button>
        { totalpage > 0 && new Array(totalpage).fill(0).map((_,index)=>{
          return <button className='btn specal'key={index+1} onClick={()=>pagenation(index+1)}>{index+1}</button>
         
        })}
        <button className='btn specal' onClick={()=>pagenation(totalpage)}>LAST</button>
       </div>
        
       </>
      )}
          </div>
    </div>
        </div>
    </>
  )
}
export default Home