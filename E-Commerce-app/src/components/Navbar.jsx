import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContextProvider'
import { Flex, Text } from '@chakra-ui/react'

const Navbar = () => {
    const {isAuth} = useContext(AuthContext)
  return (
    <Flex w={"100%"} m={"auto"} bg={"black"} justifyContent={"space-around"} padding={"15px"}> 
        <Text color={"white"} p={"3px 10px"} _hover={{bg:"white",color:"black"}}  borderRadius={"5px"}>
            <Link to={isAuth?"/":"/login"}>HOME</Link>
        </Text>
        <Text color={"white"} p={"3px 10px"} _hover={{bg:"white",color:"black"}}  borderRadius={"5px"}>
            <Link to={isAuth?"/products":"/login"}>PRODUCTS</Link>
        </Text>
        <Text color={"white"} p={"3px 10px"} _hover={{bg:"white",color:"black"}}  borderRadius={"5px"}>
            <Link to='/login'>LOGIN</Link>  
        </Text>   
    </Flex>
  )
}

export default Navbar