import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter,setCounter] = useState(0)


  const addVlaue = () => {
    // console.log("Clicked", counter);
    if(counter <= 19){
      counter = counter + 1;
      setCounter(counter)
    }

  }
  const removeValue = () => {
    if(counter > 0){
    setCounter(counter - 1)
  }
}

  return (
    <>
     <h1>Chai aur React | </h1>
     <h2>Counter {counter}</h2>
     <button onClick={addVlaue}>Add Value</button><br/><br/>
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
