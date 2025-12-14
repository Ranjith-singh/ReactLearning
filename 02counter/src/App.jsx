import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const updateCounter= ()=>{
    if(counter<20){
      // update through reference of counter using prev
      setCounter(prev=> prev+1);
    }
  }
  const downgradeCounter= ()=>{
    if(counter>0){
      // this directly updates the value: not recommended
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={updateCounter}>
        Update Counter
      </button>
      <button onClick={downgradeCounter}>
        Downgrade Counter
      </button>
      <footer>
        footer: {counter}
      </footer>
    </>
  )
}

export default App
