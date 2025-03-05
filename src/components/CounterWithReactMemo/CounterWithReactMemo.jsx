import React, { useCallback, useMemo, useState } from "react";

const Child = React.memo(({ counter }) => {
    console.log("renderizando child");
    return <p>Contador: {counter}</p>;
  });

function ExpensiveCalculation({num}) {
    const result = useMemo(() => {
      console.log("Calculando...");
      return num * 2;
    }, [num]);

    return <p>Resultado: {result}</p>

   }


function CounterWithReactMemo() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(prev => prev +1)
  })

  return (
    <div>
      
      <button onClick={increment}>Increment</button>
      <Child counter={counter}/>
      <ExpensiveCalculation num={counter}/>
    </div>
  );
}

export default CounterWithReactMemo;