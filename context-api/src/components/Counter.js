import React, { useContext, useState } from 'react'
import {ContextCounter} from '../ContextCounter'

function Counter(props) {

  const [count, setCount] = useContext(ContextCounter)

  return(

    <div>
      <div>{count}</div>
      <button onClick={() => { setCount(previous => previous - 1) }}>-</button>
      <button onClick={() => { setCount(previous => previous + 1) }}>+</button>
    </div>
  )
}

export default Counter
