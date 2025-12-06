import './App.css'
import FizzBuzz from "./FizzBuzz.tsx";
import Fib from "./Fib.tsx";
import {useState} from "react";
import Combined from "./Combined.tsx";

function App() {
    const [question, setQuestion] = useState<number>(0);
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{display:"flex"}}>
                <button onClick={()=>{setQuestion(0)}}>FizzBuzz</button>
                <button onClick={()=>{setQuestion(1)}}>Fibonacci</button>
                <button onClick={()=>{setQuestion(2)}}>Combined</button>
            </div>
            {question===0 && <FizzBuzz/>}
            {question===1 && <Fib/>}
            {question===2 && <Combined/>}
        </div>
    )

}

export default App
