import Link from 'next/link'
import {Navbar, Nav} from 'react-bootstrap' 
import responsiveStyle from '../components/responsiveStyle.module.css'


const creareLogo = require('../public/assets/creareLogo.svg')


export default function NavBar(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  style={{position:'fixed',top:0,width:"100%",zIndex:1}}>
        <Navbar.Brand href="#home">
          <img src={creareLogo} width="80" height="80" className="d-inline-block align-top" className={responsiveStyle.navbarLogo} alt="Creare logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"/>
          <Nav>
            <Nav.Link style={{marginInline:10}} href="/home">Home</Nav.Link>
            <Nav.Link style={{marginInline:10}} href="/howCreare">How Creare?</Nav.Link>
            <Nav.Link style={{marginInline:10}} href="/blogs">Blogs</Nav.Link>
            <Nav.Link style={{marginInline:10}} href="/contactUs">Contact Us</Nav.Link>
            <Nav.Link style={{marginInline:10}} href="/meetingRoom">Meeting Room</Nav.Link>
            <Nav.Link style={{marginInline:10}} href="/Launch Event" style={{color:'orange'}}>Launch Event</Nav.Link>
          </Nav>
          <Link href='/registerInstitute'>
            <a className='btn btn-dark' >Register Institute</a>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    )
}