import { useState } from 'react'
import './Counter.css'
const Counter = () => {

  const [count, setCount] = useState(0)
  const [value, setValue] = useState(1)

  const onValueChange = (e) => {
    setValue(e.target.value)
  }

  const incrementCount = () => {
    setCount((count) => count + 1)
  }

  const decrementCount = () => {
    setCount((count) => count - 1)
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2 data-testid='counter'>{count}</h2>
      <button onClick={decrementCount} data-testid='subtract-button'>-</button>
      <button onClick={incrementCount} data-testid='add-button'>+</button>
      <input className='text-center' data-testid='input' type='number' value={value} onChange={onValueChange} />
    </div>
  )
}

export default Counter
