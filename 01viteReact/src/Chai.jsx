import { useState } from "react"

const Chai= ()=>{
    const [count, setCount]= useState(0)

    const updateCount= ()=>{
        setCount(count + 1);
    }
    return(
        <>
        <h1>React Insides: {count}</h1>
        <button onClick={updateCount}>
            update count
        </button>
        </>
    )
}

export default Chai