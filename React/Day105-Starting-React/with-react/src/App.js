// import logo from './logo.svg';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0)

  return (
    <div className="App">
      <NavBar logoText="Akkpk"/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className='value'>
        {value}
      </div>
      <button onClick={()=>{ setValue(value + 1)}}>Click me</button>
      <Footer/>
    </div>
  );
}

export default App;
