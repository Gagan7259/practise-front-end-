import React from 'react'
import Home from './Home'
import Admin from './Admin'

import {BrowserRouter, Link,Routes,Route} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <BrowserRouter>
       <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <Link to='/'className='navbar-brand'>React Routing</Link>
    <div>
        <ul className='navbar-nav mr-auto'>
            <li className='nav-list'> <Link className='nav-link' to='/'>Home</Link></li>
            <li className='nav-list'> <Link className='nav-link' to='admin' >Admin</Link></li>
        </ul>
    </div>
        </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='admin' element={<Admin/>}></Route>

      </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navbar
