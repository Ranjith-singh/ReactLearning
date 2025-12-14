import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' border flex items-center justify-center text-6xl   '>
        <span className='bg-linear-to-r  from-yellow-700 via-red-700 to-blue-800 text-transparent bg-clip-text'> Hi, there</span>
      </div>
      <Card amount= {1} currency= '$'/>
      <Card amount= {82} currency= 'Rs' />
    </>
  )
}

export default App
