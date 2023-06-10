import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Header/header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect sticky="top" className='navb' expand="lg">
            <Container>
                <Navbar.Brand className='hname' href=''>Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link className='lname' href='/home'>Home</Nav.Link>
                        <Nav.Link className='lname' href='/about'>About</Nav.Link>
                        <Nav.Link className='lname' href='/contact'>Contact</Nav.Link>
                    </Nav>
                    <Nav >
                        <Nav.Link className='lname' href='/signup'>SignUp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
