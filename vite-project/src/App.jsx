import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/features/counterSlice'

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  const [num, setNum] = useState(5)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <input type="number" value={num} onChange={(e) => {
        setNum(Number(e.target.value))
      }}/>
      <button onClick={() => dispatch(incrementByAmount(num))}>
        Increase by {num}
      </button>
    </div>
  )
}

export default App