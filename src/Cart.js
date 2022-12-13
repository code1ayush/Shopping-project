import React,{useState} from 'react'

const  Newcart = ({cart,count,modal,delCart}) => {

  //  console.log(cart);


 
  return (
    <>
    <h1 className='shop-heading'>Cart</h1>
    <div className="cart-modal">{`${modal}`}</div>
      <div className="container">
       {cart.map((items)=>{
        const{id,name,price,imageUrl} = items;
        return(
          <article key={id} className="container2">
          <img className='item-image' src={imageUrl} alt="image" />
            <div className="title">
              <p className='name'>{name}</p>
              <p className='price'>{price}$</p> 
            </div>
            <div className="wcart-btns">
              <button className='add-cart-btn' onClick={()=>delCart(id)}>Remove</button>
              
            </div>
          
          </article>
          
        )
       
      })}
</div>
      {count?``
:<div className='empty-cart'>{`OOpss...Cart is empty`}</div>}
    </>

  )
}

export default Newcart;
