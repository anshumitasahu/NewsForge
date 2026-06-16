import { useState } from 'react'
import './App.css';
import './navBar';
import Navbar from './navBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>
        NewsMonkey is a news app which ca be used to grab quick news bites. 
       </h1>
       <Navbar></Navbar>
      </div>
    </>
  )
}

export default App
