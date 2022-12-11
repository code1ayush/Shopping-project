import React from 'react'
import {  Link } from "react-router-dom";
const Home = () => {
  return (
   <>
   <div className="background">
      <div className="home-text">
        <h1 className='background-heading'>The Classic</h1>
        <p className='sub-background-heading'>When you don’t know what to wear, reach for something classic</p>

        <Link to="./Shop" className="shop" >Shop</Link>
      </div>
      <img className='home-image' src="https://images.unsplash.com/photo-1596480000676-abb41f2074b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGUlMjBzaG9lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="image" />
   </div>
   <div className="subphoto">
    <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" alt="image" />

    <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnQlMjBzaG9lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="image" />


   <img src="https://images.unsplash.com/photo-1598343175492-9e7dc0e63cc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNsaXBwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" alt="image" />




   </div>
   

   </>
  )
}

export default Home
