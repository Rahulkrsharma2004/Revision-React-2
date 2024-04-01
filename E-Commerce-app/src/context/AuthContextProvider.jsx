import React, { createContext, useEffect } from "react";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false)

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      setIsAuth(true)
    }else{
      setIsAuth(false)
    }
  },[])

  return (
    <AuthContext.Provider value={{ isAuth,setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
