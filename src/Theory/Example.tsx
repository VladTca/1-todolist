import React, { useState } from 'react'
import '../App.css'

// Хук useState является одной из основных возможностей React для управления состоянием в функциональных компонентах.

export function Example() {

  const [number, setNumber] = useState<number>(0)

  const incHandler = () => {
    // setNumber(number + 1)
    // setNumber(number + 1)
    // setNumber(number + 1)
    setNumber(prev => prev + 1)
    setNumber(prev => prev + 1)
    setNumber(prev => prev + 1)
  }

  const decHandler = () => {
    setNumber(number - 1)
  }

  return (
    <div className='App'>

      <button onClick={ ()=>{setNumber(prev => prev + 1); setNumber(prev => prev + 1); setNumber(prev => prev + 1)} }>+</button>
      <div>{number}</div>
      <button onClick={decHandler}>-</button>

    </div>
  )
}











// const incrementHandler = () => {
    
// }

// const decrementHandler = () => {
  
// }