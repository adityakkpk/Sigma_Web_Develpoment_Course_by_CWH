import { useState, useEffect } from "react";
import NavBar from "./components/NavBar"
import { v4 as uuidv4 } from "uuid";
import { FaRegEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

function App() {

  const [todo, setTodo] = useState("")

  const [todos, setTodos] = useState([]);

  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoStr = localStorage.getItem('todos');
    if(todoStr){
      let todos = JSON.parse(localStorage.getItem('todos'));
      setTodos(todos);
    }
  }, [])
  

  const saveToLS = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(),todo, isCompleted: false}]);
    setTodo("");

    saveToLS();
  };
  
  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);

    let newTodos = todos.filter(item=>{
      return item.id !== id;
    });
    setTodos(newTodos);

    saveToLS();
  };
  
  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item=>{
      return item.id !== id;
    });
    setTodos(newTodos);

    saveToLS();
  };
  
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  
  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };
  
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    });

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);

    saveToLS();
  };

  return (
    <>
      <NavBar/>
      <div className="md:container md:w-1/2 md:mx-auto mx-3 my-5 rounded-xl p-5 bg-[#a6b6ed] min-h-[80vh]">
        <h1 className="font-bold text-center text-xl">Your Personal Todo Application</h1>
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <div className="flex">
            <input onChange={handleChange} value={todo} type="text" className="w-full rounded-lg" />
            <button onClick={handleAdd} disabled={todo.length <= 3} className="bg-[#3a4c93] hover:bg-[#3d5fe6] active:bg-[#3a4c93] transition-all text-white px-3 py-1 rounded-md mx-6 font-bold disabled:bg-[#8ca1f6]">Add</button>
          </div>
        </div>
        <input onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished Todos
        <div className="h-[1px] bg-black mx-auto my-2 w-[90%]"></div>
        <h2 className="text-xl font-bold">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5">No Todos to display</div>}

          {todos.map(item=>{

            return (showFinished || !item.isCompleted) && (<div key={item.id} className="todo flex md:w-full my-2 justify-between">
              <div className="flex gap-5">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e)=>{handleEdit(e, item.id)}} className="add bg-[#3a4c93] hover:bg-[#3d5fe6] active:bg-[#3a4c93] transition-all text-white px-3 py-1 rounded-md mx-2 font-bold"><FaRegEdit /></button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className="add bg-[#3a4c93] hover:bg-[#3d5fe6] active:bg-[#3a4c93] transition-all text-white px-3 py-1 rounded-md mx-2 font-bold"><AiTwotoneDelete /></button>
              </div>
            </div>)

          })}
        </div>
      </div>
    </>
  )
}

export default App
