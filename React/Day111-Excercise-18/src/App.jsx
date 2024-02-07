import { useState, useEffect } from 'react'
import './App.css'

// let data = ( async () => {
//   let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//   return await response.json();
// } )();

// let objData = await data;

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    (async function fetchData() {
      let req = await fetch('https://jsonplaceholder.typicode.com/posts');
      let res = await req.json();
      setData(res);
    })();
  }, []);

  if (data === null){
    return <h1>Post is Loading</h1>
  }

  return (
    <>
      {
        data && data.map((card) =>
          <div key={card.id} className="card border bg-[#592735] border-white p-2 rounded-xl w-80 my-4">
              <div className='flex items-center gap-1'>
                  <p className='w-1/2 bg-sky-600 rounded-lg'>UserID : {card.userId}</p>
                  <p className='w-1/2 bg-red-500 rounded-lg'>ID : {card.id}</p>
              </div>
              <div className='bg-green-600 my-1 rounded-lg'>{card.title}</div>
              <div className='border rounded-lg p-2'>{card.body}</div>
          </div>
        )
      }
    </>
  )
}

export default App
