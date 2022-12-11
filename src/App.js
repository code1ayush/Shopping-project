import React,{useState, useEffect,useContext} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Data from './data';
import Home from './Home';
import Shop from './Shop';
import Layout from './Layout';
import Contact from './Contact';
import Navbar from './Navbar';
import Newcart from './Cart';
import Wishlist from './Wishlist';


const getLocalStorage =()=>{
  let vname = localStorage.getItem('cart');
  if(vname){
    return JSON.parse(localStorage.getItem('cart'))
  }
  else
  {
    return [];
  }
}

const getLocalStoragee =()=>{
  let wish = localStorage.getItem('wish');
  if(wish){
    return JSON.parse(localStorage.getItem('wish'))
  }
  else
  {
    return [];
  }
}

const App = () => {


  const[cart,setCart]=useState(getLocalStorage());
  const [count,setCount] = useState(getLocalStorage().length);
  const[count1,setCount1] = useState(getLocalStoragee().length);
  const[wish,setWish]=useState(getLocalStoragee());
  const[modal,setModal] = useState('');
  const[search,setSearch] = useState('');

  const sliceCart=(id)=>{
  const newCart = Data.filter((item)=>item.id===id);
  setCart(cart.concat(newCart));
  setCount(cart.length+1);
  setModal(`item is added to Cart`)
}


const sliceWish=(id)=>{
  const newWish = Data.filter((item)=>item.id===id);
  setCount1(wish.length+1);
  setWish(wish.concat(newWish));
  setModal(`item is added to WishList`)
}

const wishToCart =(id)=>{
  delWish(id);
  sliceCart(id);
  setModal(`item moved to the Cart`)
}


  const delWish =(id)=>{
    const delW = wish.filter((item)=>item.id!==id);
    setWish(delW);
    setCount1(wish.length-1);
    setModal(`item removed from wishlist`)
  }

    const delCart =(id) =>{
    const del = cart.filter((item)=>item.id!==id);
    setCart(del);
    setCount(cart.length-1);
    setModal(`item removed from Cart`)
}
 
  useEffect(() => {
  const timer = setTimeout(() => setModal(''), 2000);
  return () =>clearTimeout(timer)
},[sliceCart,sliceWish,delCart,delWish,wishToCart]);


useEffect(() => {
  localStorage.setItem('cart',JSON.stringify(cart))
}, [cart])

useEffect(() => {

    localStorage.setItem('wish',JSON.stringify(wish))

}, [wish])







  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navbar count={count} count1={count1} />}>
        <Route path='Layout' element={<Layout/>}/>
        <Route index element={<Home/>}></Route>
        <Route path='Shop' element={<Shop sliceCart={sliceCart} sliceWish={sliceWish} modal={modal} search={search} setSearch={setSearch}/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Cart' element={<Newcart  cart={cart} setCart={setCart} count={count} setCount={setCount} modal={modal} delCart={delCart}/>}/>
        <Route path='Wishlist' element={<Wishlist wish={wish} setWish={setWish} count1={count1} setCount1={setCount1} wishToCart={wishToCart} delWish={delWish} modal={modal}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
  
}


export default App;

