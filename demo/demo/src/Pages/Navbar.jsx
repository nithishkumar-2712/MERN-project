import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from '../config/axios';
import { toast } from 'react-toastify';
import { AppContext } from '../App';
 function Navbar() {
    const { islogin, checkToken } =useContext(AppContext)

  const Logout=async()=>{
    const logout=confirm(" Are you showare logout")
    if(logout==1){
      try {
        const {data}=await axios.post("/Logout")
        if(data){
          toast.success("successfully logout")
          checkToken()
        }else{
          toast.warning(data.message)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  }
  return (
    <>
    <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand font-family" href="#"> WELLCOME  TO GENIUS  👕  T-SHIRT SHOP </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title  font-family" id="offcanvasDarkNavbarLabel"> Navigate Routes</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            <Link className='font-familyy  text-light' to={"/"}>HOME</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="#">Link</a> */}
             <Link className='font-familyy text-light' to={"/about"}>ABOUT</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
             <Link className='font-familyy text-light' to={"/contact"}>ORDER</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="#">Link</a> */}
             <Link  className='font-familyy text-light' to={"/Register"}>REGISTER</Link>
          </li>
         <li className="nav-item">
          
          <Link className='font-familyy text-light' to="/Uploade">Uploade</Link>
        
        
          </li>
        
          <li className="nav-item">
         <Link className='font-familyy text-light font-weight' to="/Userinfo">Userinfo</Link> 
          </li>
          <li className="nav-item">
          <Link className='font-familyy text-light font-weight' to="/ProductTable">ProductTable</Link>
          </li>
          <li className="nav-item">
           <Link className='font-familyy text-light font-weight' to="/OrderTable"> OrderTable</Link>
          </li>
           </ul> 
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
        <br></br>
              <button className="btn bg-danger text-light font-family" type="submit" onClick={Logout}>LOGOUT</button>
      </div>
    </div>
  </div>
</nav>
    
      
    </>
  );
}
export default Navbar