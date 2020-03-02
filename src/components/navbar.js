import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import Logo from "../img/startupon.svg";

function NavbarSPA() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Navbar.Brand href="#home">
        <Image
        src={Logo}
        width="200px"
        height="auto"
        className="d-inline-block align-top"
        alt="Logo Startup ON"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto"></Nav>

        <Nav>

          <Nav.Link href="#">
            Sobre
          </Nav.Link>

          <Nav.Link href="#">
            Parcerias
          </Nav.Link>

          <Nav.Link href="#">
            Próx Edições
          </Nav.Link>

          <Nav.Link href="#">
            Faleconosco
          </Nav.Link>

        </Nav>

      </Navbar.Collapse>
    </Navbar>
    </>
  );
}
 export default NavbarSPA;