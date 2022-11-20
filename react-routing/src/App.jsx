import React from 'react'
import {useState} from 'react'
import Shop from './Component/Shop'
import Cart from './Component/Cart'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar'
function App() {
  const[show,setshow]=useState(true);
const [cart,setcart]=useState(true);
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/' element={<Cart/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App