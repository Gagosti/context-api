import React, { useContext } from 'react'
import {ContextCounter} from '../ContextCounter'

function Header(props) {
  const [count, setCount] = useContext(ContextCounter)
  return(<div className='header'>
    <h3>Counter</h3>
    <div>{count}</div>
  </div>
  )
}

export default Header
