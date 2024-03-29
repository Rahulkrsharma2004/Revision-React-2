import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
  const {
    authState: { isAuth },
  } = useContext(AuthContext);

  useEffect(()=>{
    if(!isAuth){
      navigate('/login')
    }
  },[])

  return children;
};
export default PrivateRoute;
