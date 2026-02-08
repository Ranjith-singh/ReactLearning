import { HomePage } from './pages/HomePage'
import Checkout from './pages/checkout/Checkout'
import { Routes, Route } from 'react-router'
import { Orders } from './pages/Orders'
import { Tracking } from './pages/Tracking'
import './App.css'
import { PageNotFound } from './pages/PageNotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='orders' element={<Orders />} />
        <Route path='tracking' element={<Tracking />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
