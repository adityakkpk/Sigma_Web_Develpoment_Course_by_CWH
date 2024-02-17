import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        element: <><NavBar/><Home/></>
      },
      {
        path: "/login",
        element: <><NavBar/><Login/></> 
      },{
        path: "/about",
        element: <><NavBar/><About/></> 
      },{
        path: "/user/:username",
        element: <><NavBar/><User/></> 
      },
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
