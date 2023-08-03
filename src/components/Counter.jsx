import { useState } from "react"
import './Counter.css'
const Counter = () => {
    const[record , setRecord] = useState(0)

    
    const Decrement = () => {
        setRecord(
            record - 1
            )        
    }
    const Increment = () => {
        setRecord(
            record + 1
            )
        }
    return(
        <>
             <h2 style={{alignItems :"center"}}>Counter</h2>
            <h1>{record}</h1>
            <button onClick={ () => Increment() }>Increment</button>
            <button onClick={ () => Decrement() }>Decrement</button>
        </>
    )
}
export default Counter;