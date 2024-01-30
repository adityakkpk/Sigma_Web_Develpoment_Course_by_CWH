import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Here at line 5 it is an State and function useState() is a bult in hook. */}
      <div>The count is {count}</div>
      <button onClick={()=>{
        setCount(count+1)
      }}>Update Count</button>
    </>
  )
}

export default App
