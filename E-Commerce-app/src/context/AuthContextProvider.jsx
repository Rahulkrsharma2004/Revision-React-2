import React, { createContext } from "react";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
    token: null,
    isAuth: true,
  });

  const login = (token) => {
    setAuthState({
      token: token,
      isAuth: true,
    });
  };

  const logout = (token) => {
    setAuthState({
      token: null,
      isAuth: false,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
