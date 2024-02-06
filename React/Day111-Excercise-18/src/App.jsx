import { useState } from 'react'
import './App.css'

let data = ( async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return await response.json();
} )();

let objData = await data;

function App() {
  const [data, setDatas] = useState(objData)

  const Card = ({card}) => {
    return (
      <div className="card border bg-[#592735] border-white p-2 rounded-xl w-80 my-4">
          <div className='flex items-center gap-1'>
              <p className='w-1/2 bg-sky-600 rounded-lg'>UserID : {card.userId}</p>
              <p className='w-1/2 bg-red-500 rounded-lg'>ID : {card.id}</p>
          </div>
          <div className='bg-green-600 my-1 rounded-lg'>{card.title}</div>
          <div className='border rounded-lg p-2'>{card.body}</div>
      </div>
    )
  }

  return (
    <>
      <div>
        {data.map(card => {
          return <Card key={card.id} card={card} />
        })}
      </div>
    </>
  )
}

export default App
