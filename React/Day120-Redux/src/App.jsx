import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './redux/counter/counterSlice.js'
import './App.css'
import NavBar from './Components/NavBar'

function App() {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <NavBar/>
      <div>
        <button onClick={()=> dispatch(decrement())}>-</button>
        currentl count is {count}
        <button onClick={()=> dispatch(increment())}>+</button>
      </div>
    </>
  )
}

export default App
