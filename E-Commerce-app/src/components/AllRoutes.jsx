import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import SingleProducts from '../pages/SingleProducts'
import { AuthContext } from '../context/AuthContextProvider'

const AllRoutes = () => {
    const {isAuth} = useContext(AuthContext)
  return (
    <div>
        <Routes>
            <Route path="/" element={isAuth?<Home/>:<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path='/products' element={isAuth?<Products/>:<Login/>} />
            <Route path='/products/:product_id' element={isAuth?<SingleProducts/>:<Login/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes