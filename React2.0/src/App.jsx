import "./App.css"
import { useState } from "react"

const App = () => {
  const [count , setcount]= useState(0)
  
  return (
    <>
    <button onClick={()=> setcount(count+1)}>incriment</button>
    <h1>{count}</h1>
    <button onClick={()=> setcount(count-1)}>decriment</button>
   

    </>
  )
}

export default App