import { useState } from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="min-h-screen relative">
        <Manager/>
      </div>
      <Footer />
    </>
  )
}

export default App
