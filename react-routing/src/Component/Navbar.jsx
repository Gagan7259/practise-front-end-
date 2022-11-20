import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>My Shoopy</Link>
        <div className='ml-auto'>
            <ul className='navbar nav'>
                <li className='nav-list'> <Link to="/shop" className='nav-link'>SHOP</Link></li>
                <li className='nav-list'>  <Link className='nav-link'> 
                <i className="fas fa-cart-plus"></i>
                    </Link> </li>

            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar


  /* <div className="nav_box">
      <span className="my_shop">My Shopping</span>
      <div className="cart">
        <span>
            <i className="fas fa-cart-plus"></i>
        </span>
      </div>
    </div>
 */

