import { useState, useEffect } from 'react'

const CounterWithEffect = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
      }

    useEffect(() => {
        console.log(`El contador ahora en: ${count}`)
      }, [count])

  return (
    <>
      <h1>Contador</h1>
      <button onClick={handleIncrement}>Incrementar</button>
    </>
  )
}

export default CounterWithEffect