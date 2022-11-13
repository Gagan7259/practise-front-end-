import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark'>
          <Link to="/" className='navbar-brand'>Contacts</Link>
        </nav>
      </div>
    )
  }
}
export default Navbar
