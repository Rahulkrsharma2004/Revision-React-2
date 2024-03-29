import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='MainNavDiv'>
        <div>
            <Link to='/'>HOME</Link>
        </div>
        <div>
            <Link to='/products'>PRODUCTS</Link>
        </div>
        <div>
            <Link to='/login'>LOGIN</Link>  
        </div>   
    </div>
  )
}

export default Navbar