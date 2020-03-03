import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import Logo from "../img/startupon.png";

function NavbarSPA() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Navbar.Brand href="#home">
        <Image
        src={Logo}
        width="220px"
        height="auto"
        className="d-inline-block align-top"
        alt="Logo Startup ON"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto"></Nav>

        <Nav>

          <Nav.Link href="#sobre">
            Sobre
          </Nav.Link>

          <Nav.Link href="#parcerias">
            Parcerias
          </Nav.Link>

          <Nav.Link href="#proximasedicoes">
            Próx Edições
          </Nav.Link>

          <Nav.Link href="#faleconosco">
            Faleconosco
          </Nav.Link>

        </Nav>

      </Navbar.Collapse>
    </Navbar>
    </>
  );
}
 export default NavbarSPA;