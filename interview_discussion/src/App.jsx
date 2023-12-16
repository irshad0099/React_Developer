import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setvalue] = useState(1)
  // const [MultipliedValue, setMultipliedValue] = useState(1)

  let multipliedValue = value * 5


  const multiplybyfive = () => {
    // setMultipliedValue(value * 5)
    setvalue(value + 1)
  }

  return (
    <>
      <h1>Main value: {value} </h1>
      <button onClick={multiplybyfive}
      >Click to multiply by 5</button>
      <h2>Multiplied value: {multipliedValue}</h2>
    </>
  )
}

export default App
