import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <div className='nav-links'>
            <Link to="/">Home</Link>
           <Link to="/Shop">Shop</Link>
           <Link to="/Contact">Contact</Link> 
        </div>
        <Outlet/>
    </>
  )
}

export default Layout
