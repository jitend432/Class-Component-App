import React from 'react'
//import Button from '@material-ui/core/Button'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './home.css'
import { useState } from 'react'

export default function home() {

  const[count, setCount] = useState(0)

  return (
    <div className='topDiv'>
        
        <h1>{count}</h1>
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={()=>setCount(count+1)}>Increment</Button>
        <Button variant="contained" onClick={()=>setCount(count-1)}>Decrement</Button>
        </Stack>
    </div>
  )
}
