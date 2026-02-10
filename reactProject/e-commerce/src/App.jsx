import { HomePage } from './pages/home/HomePage'
import Checkout from './pages/checkout/Checkout'
import { Routes, Route } from 'react-router'
import { Orders } from './pages/orders/Orders'
import { Tracking } from './pages/Tracking'
import './App.css'
import { PageNotFound } from './pages/PageNotFound'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [cartItems, setCartItems]= useState([]);
  useEffect(()=>{
    const getCartItems= async()=>{
      const response= await axios.get("/api/cart-items?expand=product")
      setCartItems(response.data)
    }
    getCartItems();
  }, [])
  // useEffect(()=>{
  //       axios.get("/api/cart-items?expand=product")
  //       .then((response)=>{
  //           setCartItems(response.data)
  //       })
  //       .catch((error)=>{
  //           console.log("error getting cart items from backend", error.data);
  //       })
  //   }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cartItems={cartItems} />} />
        <Route path='checkout' element={<Checkout cartItems={cartItems} />} />
        <Route path='orders' element={<Orders cartItems={cartItems}/>} />
        <Route path='tracking' element={<Tracking />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
