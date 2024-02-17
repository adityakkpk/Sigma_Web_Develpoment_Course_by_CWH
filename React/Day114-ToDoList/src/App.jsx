import NavBar from "./components/NavBar"


function App() {

  return (
    <>
      <NavBar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <div>
            <input type="text" className="w-1/2" />
            <button className="bg-[#3a4c93] hover:bg-[#3d5fe6] active:bg-[#3a4c93] transition-all text-white px-3 py-1 rounded-md mx-6 font-bold">Add</button>
          </div>
        </div>
        <h2 className="text-xl font-bold">Your Todos</h2>
        <div className="todos">
            <div className="todo flex">
              <div className="name">Lorem ipsum dolor sit amet.</div>
              <div className="buttons">
                <button className="add bg-[#3a4c93] hover:bg-[#3d5fe6] active:bg-[#3a4c93] transition-all text-white px-3 py-1 rounded-md mx-2 font-bold">Edit</button>
                <button className="add bg-[#3a4c93] hover:bg-[#3d5fe6] active:bg-[#3a4c93] transition-all text-white px-3 py-1 rounded-md mx-2 font-bold">Delete</button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
