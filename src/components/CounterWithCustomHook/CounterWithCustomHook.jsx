import useCounter from './../../hooks/useCounter'
import React from 'react'

const CounterWithCustomHook = () => {
    const {count, increment,decrement,reset} = useCounter()
    return (
        <div>
            <h1>Counter with custom hook: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
  )
}

export default CounterWithCustomHook