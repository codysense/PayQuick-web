import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


const ProtectedRoutes = ({children, roles, departments}) => {
  const {currentUser} = useAuth();


  if (!currentUser) return <Navigate to= "/signin" replace />

  if(roles && !roles.includes( currentUser.roles) && !departments.includes(currentUser.department)){
     
    toast.error("Unauthorized Access")
    return <Navigate to="/" replace />  
  }
    return children
};

export default ProtectedRoutes;
