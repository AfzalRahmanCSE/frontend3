import { useState } from "react";

const Counter=({value})=>{
    const [counter,setCounter]=useState(value)
    const increment=()=>{
        setCounter(counter+1)
    }
    const decrement=()=>{
        setCounter(counter-1)
    }
    return <div>
        <h1>Counter:{counter}</h1>
        <button style={{margin:10,padding:5}}onClick={increment}>++</button>
        <button style={{padding:5}}onClick={decrement}>--</button>
    </div>
}

export default Counter;