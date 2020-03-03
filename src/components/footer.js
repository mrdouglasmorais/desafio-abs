import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

import LogoFooterRebranding from '../img/logo-footer-rebranding.png';

function FooterPage() {
  return (
    <>
    
      <footer className="footer footer-content">
        <Container fluid>
          <Row>
            <Col  xs={12} sm={12} xm={5} lg={5} xl={5}>
            <p>A Associação Brasileira de Startups foi fundada para promover e representar as startups brasileiras. Nós trabalhamos para tornar o Brasil uma das cinco maiores potências em inovação e empreendedorismo tecnológico.</p>
            <br/>
            <Image
            src={LogoFooterRebranding}
            alt=""
            width="40%"
            heigth="auto"
            />
            </Col>
            <Col  xs={12} sm={12} xm={3} lg={3} xl={3}>
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
            <Col xs={12} sm={12} xm={4} lg={4} xl={4} >
            <h5>Fique por dentro das novidades</h5>
              <Form>

                <Form.Group controlId="formBasicName">
                  <Form.Control type="email" placeholder="Insira seu nome" /> 
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Seu melhor email" />
                </Form.Group>

                <Button  className="button-form--footer" type="submit" size="lg" block>
                  SAIBA MAIS
                </Button>
              </Form>
            </Col>
          </Row>
        
          <div className="footer-line--divisor"></div>
          <Row className="footer-copyright">
            <Col xs={12} sm={12} xm={8} lg={7} xl={8}><p>Copyright 2019 ABStartups | All Rights Reserved | Nós S2 Startups
              A Abstartups é uma organização sem fins lucrativos.</p></Col>
            <Col xs={12} sm={12} xm={4} lg={5} xl={4} className="footer-social">

              <Button className="footer-social-icon" variant="link"><FontAwesomeIcon icon={faYoutube} size="2x"/></Button>
              <Button className="footer-social-icon" variant="link"><FontAwesomeIcon icon={faTwitter} size="2x"/></Button>
              <Button className="footer-social-icon" variant="link"><FontAwesomeIcon icon={faLinkedin} size="2x"/></Button>
              <Button className="footer-social-icon" variant="link"><FontAwesomeIcon icon={faInstagram} size="2x"/></Button>
              <Button className="footer-social-icon" variant="link"><FontAwesomeIcon icon={faFacebook} size="2x"/></Button>

            </Col>
          </Row>
        </Container>
      
        
      </footer>
    </>
  );
}

export default FooterPage;
