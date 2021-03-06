import Link from 'next/link'
import {Navbar, Nav} from 'react-bootstrap'

const creareLogo = require('../public/assets/creareLogo.svg')

export default function NavBar(){
    return(
        <Navbar collapseOnSelect expand="md" bg="light" variant="light" className='sticky-top'>
          <Navbar.Brand href="#home">
            <img src={creareLogo} width="90" className="d-inline-block align-top cus-header-logo" alt="Creare logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"/>
              <Nav className='bg-light'>
                <Nav.Link style={{marginLeft:25, marginRight:25}} href="/">Home</Nav.Link>
                <Nav.Link style={{marginLeft:25, marginRight:25}} href="/how-creare">How Creare?</Nav.Link>
                <Nav.Link style={{marginLeft:25, marginRight:25}} href="/blogs">Blogs</Nav.Link>
                <Nav.Link style={{marginLeft:25, marginRight:25}} href="/contact-us">Contact Us</Nav.Link>
                <Nav.Link style={{marginLeft:25, marginRight:25}} href="/meeting-room">Meeting Room</Nav.Link>
                <Nav.Link style={{marginLeft:25, marginRight:25,color:'orange'}} href="/freelancer">Become a Freelancer</Nav.Link>
                <Nav.Link style={{marginLeft:25, marginRight:25}} href="/signIn">Login</Nav.Link>
              </Nav>
            <Link href='/register-institute'>
              <a className='btn btn-dark'>Register Institute</a>
            </Link>
          </Navbar.Collapse>
      </Navbar>
    )
}