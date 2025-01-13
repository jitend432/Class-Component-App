import { useState } from 'react'
import './App.css'
import Home from './Home/home'
import Ven from './Venue/ven'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Ven/>
        {/* <Home/> */}
        
    </>
  )
}

export default App
