import React from 'react'
import Component1 from './Component1'

const Button = ({count}) => {
  return (
    <div>
      <button><span><Component1 count={count}/></span> Mai hoon button</button>
    </div>
  )
}

export default Button