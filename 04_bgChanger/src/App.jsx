import { useState } from "react"

function App() {
  const [color, setColor] = useState("Gray")
  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}>
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
   <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
   <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
   style={{backgroundColor:"red"}}>Red</button>
   <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
   style={{backgroundColor:"blue"}}>Blue</button>
   <button onClick={() => setColor("Green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
   style={{backgroundColor:"Green"}}>Green</button>
   <button onClick={() => setColor("Fuchsia")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
   style={{backgroundColor:"Fuchsia"}}>Fuchsia</button>
   <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
   style={{backgroundColor:"black"}}>Black</button>
   <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
   style={{backgroundColor:"purple"}}>purple</button>
   <button onClick={() => setColor("Yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
   style={{backgroundColor:"Yellow"}}>Yellow</button>
   <button onClick={() => setColor("Indigo")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
   style={{backgroundColor:"Indigo"}}>Indigo</button>
   <button onClick={() => setColor("Coral")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
   style={{backgroundColor:"Coral"}}>Coral</button>
   
   </div>
   </div>
   </div>
  )
}

export default App
