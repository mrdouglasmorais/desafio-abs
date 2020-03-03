import React from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from  'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SlideMock from '../img/slide-mock.png';



function sectionTwo() {

  return (
    <>
      <section id="proximasedicoes" className="section-next--editions">
        <Container className="section-two">
          <h1>Próximas Edições</h1>

          <Image src={SlideMock} width="100%" heigth="auto" alt="slide mock"/>

          <Row>
            <Col sm={3}></Col>
            <Col xs={6} xm={6} lg={6} xl={6}><Button variant="outline-light" size="lg">Veja as edições anteriores</Button>{' '}</Col>
            <Col sm={3}></Col>
          </Row>
          <div className="yellow-divisor"></div>
        </Container>
      </section>
      
    </>
  );
}
export default sectionTwo;
