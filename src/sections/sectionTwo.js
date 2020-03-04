import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from  'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CarousselSPA from '../components/carousel'




function sectionTwo() {

  return (
    <>
      <section id="proximasedicoes" className="section-next--editions">
        <Container className="section-two">
          <h1>Próximas Edições</h1>
          <CarousselSPA />

          <Row className="next-editionsbutton">        
            <Col  xs={12} xm={12} lg={12} xl={12}><Button variant="outline-light" size="lg">Veja as edições anteriores</Button>{' '}</Col>
          </Row>
          <div className="yellow-divisor"></div>
        </Container>
      </section>
      
    </>
  );
}
export default sectionTwo;
