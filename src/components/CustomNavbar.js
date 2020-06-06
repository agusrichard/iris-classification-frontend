import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/auth'


function CustomNavbar(props) {
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
            <Link to="/predict" className="clink">Predict</Link>
          </Nav>
          {
            props.isLoggedIn ? 
            <Nav className="ml-auto">
              <Link to="/" className="clink" onClick={props.logout}>Logout</Link>
            </Nav>
            :
            <Nav className="ml-auto">
              <Link to="/auth/register" className="clink">Sign Up</Link>
              <Link to="/auth/login" className="clink">Login</Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
})

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar)