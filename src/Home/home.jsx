import React from 'react'
import './home.css'
import { useState } from 'react'

export default function home() {

  const[count, setCount] = useState(0)

  return (
    <div>
        
        <h1>{count}</h1>

        <button onClick={()=>setCount(count+1)}>IncrementCounter</button>
        <button onClick={()=>setCount(count-1)}>IncrementCounter</button>
    </div>
  )
}
