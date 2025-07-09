import React from 'react'
import { Navigate } from "react-router-dom";
const ProtectedRoute=()=> {
 const userRole = localStorage.getItem("role");

  if (role === "admin" && userRole !== "admin") {
    return <Navigate to="/" />; // redirect normal users to home
  }

  return children;
};
export default ProtectedRoute