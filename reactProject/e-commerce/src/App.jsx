import { HomePage } from './pages/home/HomePage'
import Checkout from './pages/checkout/Checkout'
import { Routes, Route } from 'react-router'
import { Orders } from './pages/orders/Orders'
import { Tracking } from './pages/Tracking'
import './App.css'
import { PageNotFound } from './pages/PageNotFound'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

function App() {
  const [cartItems, setCartItems]= useState([]);
  window.axios= axios;

  const getCartItems= useCallback(async()=>{
      const response= await axios.get("/api/cart-items?expand=product")
      setCartItems(response.data)
    }, [])
  useEffect(()=>{
    getCartItems();
  }, [])

  const addToCart= async(productId, quantity) => {
      await axios.post(`/api/cart-items`, {
          productId,
          quantity
      });
      getCartItems();
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cartItems={cartItems} getCartItems={getCartItems} addToCart={addToCart}/>} />
        <Route path='checkout' element={<Checkout cartItems={cartItems} getCartItems={getCartItems}/>} />
        <Route path='orders' element={<Orders cartItems={cartItems} addToCart={addToCart}/>} />
        <Route path='tracking/:orderId/:productId' element={<Tracking cartItems={cartItems} />} />
        <Route path="*" element={<PageNotFound cartItems={cartItems} />} />
      </Routes>
    </>
  )
}

export default App
