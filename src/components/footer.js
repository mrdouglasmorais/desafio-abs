import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import LogoFooterRebranding from '../img/logo-footer-rebranding.png';

function FooterPage() {
  return (
    <>
    
      <footer className="footer footer-content">
        <Container fluid>
          <Row>
            <Col xs={12} sm={5}>
            <p>A Associação Brasileira de Startups foi fundada para promover e representar as startups brasileiras. Nós trabalhamos para tornar o Brasil uma das cinco maiores potências em inovação e empreendedorismo tecnológico.</p>
            <br/>
            <Image
            src={LogoFooterRebranding}
            alt=""
            width="40%"
            heigth="auto"
            />
            </Col>
            <Col xs={12} sm={3}>
              <Nav.Link eventKey="link-1" className="footer-links">Sobre</Nav.Link>
                <div className="footer-links--divisor"></div>
              <Nav.Link eventKey="link-1" className="footer-links">Informação</Nav.Link>
                <div className="footer-links--divisor"></div>
              <Nav.Link eventKey="link-1" className="footer-links">Mentorias</Nav.Link>
                <div className="footer-links--divisor"></div>
              <Nav.Link eventKey="link-1" className="footer-links">Benefícios</Nav.Link>
                <div className="footer-links--divisor"></div>
              <Nav.Link eventKey="link-1" className="footer-links">Eventos</Nav.Link>
                <div className="footer-links--divisor"></div>
              <Nav.Link eventKey="link-1" className="footer-links">Faça negócios</Nav.Link>
                <div className="footer-links--divisor"></div>
            </Col>
            <Col xs={12} sm={4} >
            <h5>Fique por dentro das novidades</h5>
              <Form>

                <Form.Group controlId="formBasicName">
                  <Form.Control type="email" placeholder="Insira seu nome" /> 
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Seu melhor email" />
                </Form.Group>

                <Button type="submit" size="lg" block>
                  SAIBA MAIS
                </Button>
              </Form>
            </Col>
          </Row>
        
          <div className="footer-line--divisor"></div>
          <Row className="footer-copyright">
            <Col xs={12} sm={9}><p>Copyright 2019 ABStartups | All Rights Reserved | Nós S2 Startups
              A Abstartups é uma organização sem fins lucrativos.</p></Col>
            <Col xs={12} sm={3}>
              <ToggleButtonGroup type="checkbox">
                  <ToggleButton value={1}>1</ToggleButton>
                  <ToggleButton value={2}>2</ToggleButton>
                  <ToggleButton value={3}>3</ToggleButton>
                  <ToggleButton value={4}>4</ToggleButton>
                  <ToggleButton value={5}>5</ToggleButton>
              </ToggleButtonGroup>
            </Col>
          </Row>
        </Container>
      
        
      </footer>
    </>
  );
}

export default FooterPage;
