import React from 'react'
import {AiOutlineInstagram,AiOutlineHeart,AiOutlineShoppingCart,AiFillHeart} from "react-icons/ai";
import {FaTwitter,FaFacebookF} from "react-icons/fa";
import Layout from './Layout';
import { Outlet, Link } from "react-router-dom";
const Navbar = ({count,count1}) => {
  return (
    <>
        <div className="nav-icons">
            <a href="https://www.instagram.com/_ayush_verma_18/" target="_blank"><AiOutlineInstagram/></a>
            <a href=""><FaTwitter/></a>
            <a href=""><FaFacebookF/></a>
            {count1?<Link to="/Wishlist"><AiFillHeart className='red-heart'/></Link>:<Link to="/Wishlist"><AiOutlineHeart/></Link>}
            <Link to="/Cart" className='cart-number'><AiOutlineShoppingCart/><span className='num-position'>{count}</span></Link> 
            </div>
        
        <div className="nav-header">
            <p>FASHION</p>
        </div>
        <div className="nav-subheader">
            <p>The Ultimate Shoe Store</p>
        </div>

        <Layout/>
        
       
    </>
  )
}

export default Navbar;
