import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from  'react-bootstrap/Image';
import bmg from '../img/parthners.png'
import abdi from '../img/abdi.png'
import baptistaluiz from '../img/baptistaluiz.png'
// import Button from  'react-bootstrap/Button';



function sectionFive() {
  return (
    <>
      <section id="parcerias" className="section-five">
        <Container>
          <h1>Conheça os nosso mantenedores!</h1>
          <Row>
            <Col xs={12} md={12} className="brand-list">
              <Image src={abdi} width="130px" alt="info" className="brand-section"/>
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
              <Image src={baptistaluiz} width="130px" alt="info" className="brand-section"/>
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
            </Col>

            <Col xs={12} md={12} className="brand-list">
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
              <Image src={bmg} width="130px" alt="info" className="brand-section"/>
            </Col>
          </Row>

        </Container>
      </section>
    </>
  );
}
export default sectionFive;
