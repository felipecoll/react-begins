import React from 'react'
import { useState } from 'react'

const Counter = () => {
  
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Contador</h1>
      <h2>El contador inicializa en: {count}</h2>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </>
  )
}

export default Counter