import React ,{useState,useContext}from 'react'
import { BsFillArrowUpCircleFill,BsFillArrowDownCircleFill } from "react-icons/bs";
import {AiTwotoneHeart} from "react-icons/ai"
import Data from './data'
import Newcart from './Cart';


const allColors = ["All", ...new Set(Data.map((item)=> item.colour))];
const allBrands = ["All", ...new Set(Data.map((item)=>item.brandName))];

const Shop = ({sliceCart,sliceWish,modal}) => {

  const[list,setList] =useState(Data);
  const[showColor,setShowColor] = useState(false);
  const[showBrand,setShowBrand] = useState(false);
  const[showFilter,setShowFilter] = useState(false);
  const [showsort,setShowSort]  = useState(false);

//    const[cart,setCart]=useState([]);

//   const sliceCart=(id)=>{
//   const newCart = Data.filter((item)=>item.id===id);
//   setCart(newCart);
// }

  const priceUp = [...list].sort((a,b)=>a.price-b.price);
const priceDown = [...list].sort((a,b)=>b.price-a.price);
const popUp = [...list].sort((a,b)=>a.productCode-b.productCode);
const popUpd = [...list].sort((a,b)=>b.productCode-a.productCode);

  const sfilter=()=>{
    setShowFilter(!showFilter);
    if(showColor){
      setShowColor(false);
    }
    if(showBrand){
      setShowBrand(false);
    }
  }

  const Color=()=>{
      setShowColor(!showColor);
      if(showBrand){
        setShowBrand(false);
      }
  }

  const brand=()=>{
    setShowBrand(!showBrand);
    if(showColor){
      setShowColor(false);
    }
  }

  const filterListColor =(colour)=>{
    if(colour ==='All'){
    setList(Data);
    return;
    }
    const newList = Data.filter((item)=>item.colour===colour);
    setList(newList);
  }

  const filterListBrand = (brand)=>{
    if(brand==="All"){
    setList(Data);
    return;
    }
    const newBrandList = Data.filter((item)=>item.brandName===brand);
    setList(newBrandList);
  }

  const sortPriceUp=()=>{
    setList(priceUp);
    setShowSort(false)
  }

  const sortPriceDown=()=>{
    setList(priceDown);
    setShowSort(false)
  }

  const sortpop=()=>{
    setList(popUp);
    setShowSort(false)
  }

  const sortpopd=()=>{
    setList(popUpd);
    setShowSort(false)
  }

  const dispsort=()=>{
    setShowSort(!showsort)
  }




  


  return (
    <>
    {/* {cart.map((items)=>{
      return(
        <div>
          {items.price}
        </div>
      )
    })} */}
    <h1 className='shop-heading'>SHOP</h1>
    <div >
    <button className='sort-btn' onClick={dispsort}>sort</button>
    {showsort?<div className="sort-container">
    <button onClick={sortPriceUp} 
   >Price <BsFillArrowUpCircleFill  className="uparrow"/></button>
    <button onClick={sortPriceDown} >Price<BsFillArrowDownCircleFill className="downarrow"/></button>
    <button onClick={sortpop} >Popularity<BsFillArrowUpCircleFill className="uparrow"/></button>
    <button onClick={sortpopd} >Popularity<BsFillArrowDownCircleFill className="downarrow"/></button>
    </div>:[]}
    </div>
    <div className="parent">
    <div className="btn-container">
    <button  onClick={sfilter}>Filter</button>
    {showFilter?<div className='filter-btn'>
    <button className='color-btn' onClick={Color}>Color</button>
    <button className='brand-btn' onClick={brand}>Brand</button></div>:[]}

    <div className="color-btn-container">
      {allColors.map((colour)=>{
        return(
          < >
            {showColor?<button className='color-btn2' onClick={()=>filterListColor(colour)}>{colour}</button>:[]}
          </>
        )
      })}
    </div>
    <div className="brand-btn-container">
      {allBrands.map((brand)=>{
        return(
         <>
           {showBrand?<button className='brand-btn2' onClick={()=>filterListBrand(brand)}>{brand}</button>:[]}
         </>
        )
      })}
    </div>
    </div>
    <div className='modal'>{`${modal}`}</div>
    </div>
    
    <div className="container">
      {list.map((items)=>{
        const{id,name,price,imageUrl} = items;
        return(
          <article key={id} className="container2">
          <img className='item-image' src={imageUrl} alt="" />
            <div className="title">
              <p className='name'>{name}</p>
              <p className='price'>{price}$</p>
            </div>
            <div className="cart-btns">
              <button className='add-cart-btn' onClick={()=>sliceCart(id)}>Add to Cart</button>
              <button className='add-wish-list' onClick={()=>sliceWish(id)}><AiTwotoneHeart className='add-wish-lists'/></button>
            </div>
          
          </article>
          
        )
       
      })}

      </div>
      
    
      
    </>
  )
  
}

export default Shop
