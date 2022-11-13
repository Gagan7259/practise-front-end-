import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/' className='navbar-brand' >REACT ROUTING</Link>


        <div className='ml-auto'>
          <ul className='navbar-nav'>
            <li className='nav-list'> <Link className='nav-link' to='/'>Home</Link> </li>
            <li className='nav-list'> <Link className='nav-link' to='/about'>About</Link> </li>
            <li className='nav-list'> <Link className='nav-link' to='/dashboard'>Dashboard</Link> </li>
            
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
