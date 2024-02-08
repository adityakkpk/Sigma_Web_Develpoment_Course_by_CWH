import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Aditya")
  const [form, setForm] = useState({})
  // const [form, setForm] = useState({email: "", phone: ""})

  const handleClick = () => {
    alert("I am clicked");
  }

  const handleMouseOver = () => {
    alert('Hey i am mouse over')
  }

  const handleChanges = (e) => {
    // setName(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am red
      </div> */}

      <input type="text" name='email' value={form.email?form.email:""} onChange={handleChanges}/>
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChanges}/>
    </>
  )
}

export default App
