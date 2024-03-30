import React, { createContext } from "react";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(true)
  return (
    <AuthContext.Provider value={{ isAuth,setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
