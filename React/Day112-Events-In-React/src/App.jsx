import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Aditya")

  const handleClick = () => {
    alert("I am clicked");
  }

  const handleMouseOver = () => {
    alert('Hey i am mouse over')
  }

  const hanldeChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am red
      </div> */}

      <input type="text" value={name} onChange={hanldeChange}/>
    </>
  )
}

export default App
