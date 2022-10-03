import { useState } from 'react'

function App () {
  const [counter, setCounter] = useState(0)

  function handleIncrement () {
    setCounter(counter => counter + 1)
  }

  function handleDecrement () {
    setCounter(counter => counter - 1)
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </>
  )
}

export { App }
