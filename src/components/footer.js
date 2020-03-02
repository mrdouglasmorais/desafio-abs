import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FooterPage() {
  return (
    <>
      <footer className="footer footer-content">
        <Container fluid>
          <Row>
            <Col xs={6}>Texto institucional</Col>
            <Col xs={3}><p>Links</p></Col>
            <Col xs={3}>Form</Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
          <hr></hr>
            <Col xs={9}><p>Copyright 2019 ABStartups | All Rights Reserved | Nós S2 Startups
              A Abstartups é uma organização sem fins lucrativos.</p></Col>
            <Col xs={3}>Social links</Col>
          </Row>
        </Container>
      
        
      </footer>
    </>
  );
}

export default FooterPage;
