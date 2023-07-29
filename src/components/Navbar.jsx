import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <div id="head" className="navbar container">
      <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#home" className="navbar__logo"><img src={logo} alt="logo" /> <span>P.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar__toggle" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar__list">
              <Nav.Link href="#about" className="navbar__link">About</Nav.Link>
              <Nav.Link href="#portfolio" className="navbar__link">Portfolio</Nav.Link>
              <Nav.Link href="#service" className="navbar__link">Service</Nav.Link>
              <Nav.Link href="#blog" className="navbar__link">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <button className="navbar__btn">Contact</button>
    </div>
  );
}

export default NavBar;
