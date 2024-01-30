import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"
import Card from "./components/Card.jsx"

function App() {

  return (
    <>
      <NavBar/>
      <main>
        <div className="card-container">
          <Card title="card 1" description="card 1 Desc" />
          <Card title="card 2" description="card 2 Desc" />
          <Card title="card 3" description="card 3 Desc" />
          <Card title="card 4" description="card 4 Desc" />
          <Card title="card 5" description="card 5 Desc" />
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
