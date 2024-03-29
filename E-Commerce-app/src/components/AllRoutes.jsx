import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import SingleProducts from '../pages/SingleProducts'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
            <Route path="/login" element={<Login/>} />
            <Route path='/products' element={<PrivateRoute><Products/></PrivateRoute>} />
            <Route path='/products/:product_id' element={<PrivateRoute><SingleProducts/></PrivateRoute>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes