import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


export default function CustomNavbar(props) {
  return (
    <Navbar className={props.transparent ? "cnav-transparent" : "cnav"} expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand className="text-lg ubuntu text-white">
            <img 
              src={require('../assets/images/logo.svg')}
              width="30"
              height="30"
              className="d-inline-block align-center cnav-brand-icon"
              alt="Iris App Logo"
            />{' '}
            Iris App
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="clink">Home</Link>
          </Nav>
          <Nav className="ml-auto">
            <Link to="#" className="clink">Register</Link>
            <Link to="#" className="clink">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}