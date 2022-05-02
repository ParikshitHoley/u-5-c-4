import { useEffect, useRef , useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Form} from "./Comp/Form.jsx"
import {Minu} from "./Comp/Info.jsx"
function App() {
  const [count, setCount] = useState(0)
  const countRef = useRef(null);

  useEffect(()=>{
    countRef.current = setInterval(()=>{
      setCount((p)=>p+1)
    },1000)
  },[])

  return (
    <div className="App">
     <h3>counter : {count}</h3>

     <button onClick={()=>{
          clearInterval(countRef.current)
     }
      
     }>pause</button>

     <button onClick={()=>{
       startInterval();
     }}>start</button>

     <button onClick={()=>{
       clearInterval(countRef.current);
       setCount(0)
     }}>reset</button>
     
    </div>
  )
}

export default App
