import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const state = useContext(AuthContext);
  const navigate = useNavigate()
 
  const handleClick = () => {
    navigate("/products")
  }

  return (
    <div style={{margin:"20px"}}>
      <Heading>WELCOME IN HOME PAGE</Heading>
    </div>
  );
};

export default Home;
