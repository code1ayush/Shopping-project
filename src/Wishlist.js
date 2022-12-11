import React from 'react'
import {BsTrash} from "react-icons/bs"

const Wishlist = ({wish,count1,wishToCart,delWish,modal}) => {
  // const delWish =(id)=>{
  //   const delW = wish.filter((item)=>item.id!==id);
  //   setWish(delW);
  //   setCount1(wish.length-1);
  // }
  return (
    <>
    <h1 className="shop-heading">WishList</h1>
    <div className="wmodal">{`${modal}`}</div>
    {count1?<div className="container">
       {wish.map((items)=>{
        const{id,name,price,imageUrl} = items;
        return(
          <article key={id} className="container2">
          <img className='item-image' src={imageUrl} alt="image" />
            <div className="title">
              <p className='name'>{name}</p>
              <p className='price'>{price}$</p> 
            </div>
            <div className="cart-btns">
              <button className='del-wish-btn' onClick={()=>delWish(id)}><BsTrash className='wish-trash'/></button>
              <button className='add-cart-btn' onClick={()=>wishToCart(id)} >Move To Cart</button>
            </div>
          
          </article>
          
        )
       
      })}
</div>:<div className='empty-cart'>{`OOpss..wishlist is empty...`}</div>}
    </>
  )
}

export default Wishlist
