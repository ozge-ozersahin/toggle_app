import { useState } from "react"
import "./counter.css"
const Counter = () => {
    const [num, setNum] = useState(0);

    return(
    <div className="app-container">
        <h1 className="counter-heading">Current number {num}</h1>
        <div className="button-container">
        <button className="counter-button" onClick={() => {setNum(num + 1)}}>Add 1</button>
        <button className="counter-button" onClick={() => {setNum(num -1)}}>Substrack 1</button>
        <button className="counter-button" onClick={() => {setNum(0)}}>Reset</button>
        </div>

    </div>)
}

export default Counter;