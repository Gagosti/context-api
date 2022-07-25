import React, { useState } from 'react'

function Counter(props) {

  const [count, setCount] = useState(0)

  return(

    <div>
      <div>{count}</div>
      <button onClick={() => { setCount(previous => previous - 1) }}>-</button>
      <button onClick={() => { setCount(previous => previous + 1) }}>+</button>
    </div>
  )
}

export default Counter
