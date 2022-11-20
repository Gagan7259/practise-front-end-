import React from 'react'
import {Link} from 'react-router-dom'
const Navba = () => {
  return (
    <div>

    <nav className='navbar navbar-dark bg-dark navbar-expand-lg '>
       <Link to="/" className="navbar-brand">App project</Link>
       <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li className='nav-list'> <Link  to="/register"className='nav-link'>Rigister</Link> </li>
            <li className='nav-list'> <Link  to="/edit"className='nav-link'>Edit</Link> </li>
            </ul>
            </div> 
    </nav>
    </div>
  )
}

export default Navba