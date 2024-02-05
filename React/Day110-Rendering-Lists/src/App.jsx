import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn] = useState(true)
  const [todos, settodos] = useState([
    {
      title: 'hey',
      desc: 'I am a good todo 1'
    },{
      title: 'hey there',
      desc: 'I am a good todo 2'
    },{
      title: 'hey you',
      desc: 'I am a good todo 3'
    }
  ])

  const Todo = ({todo})=>{}


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showBtn?<button>Mr. India</button>: "thenga"} */}
      { showBtn && <button>Mr. India</button> }

      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo}/>
        return  (
            <div key={todo.title} className='m-4 border-2 border-purple-600'>
    
              <div className="Todo">{todo.title}</div>
              <div className="Todo">{todo.desc}</div> 
            </div>
        )
      })}

      <div className="card">
        <button onClick={() => setshowBtn(!showBtn)}>
          Mazic Button
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
