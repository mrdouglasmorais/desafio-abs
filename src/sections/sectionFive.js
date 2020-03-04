import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from  'react-bootstrap/Image';

import abdi from '../img/logos/abdi.png';
import bbb from '../img/logos/bbb.png';
import bmg from '../img/logos/bmg.png';
import baptistaluiz from '../img/logos/baptistaluiz.png';
import bossanova from '../img/logos/bossanova.png';
import epd from '../img/logos/edp.png';
import hsm from '../img/logos/hsm.png';
import lojaintegrada from '../img/logos/lojaintegrada.png';

import oito from '../img/logos/oito.png';
import piar from '../img/logos/piar.png';
import ihr from '../img/logos/ihr.png';
import salesforce from '../img/logos/salesforce.png';
import sicoob from '../img/logos/sicoob.png';
// import Button from  'react-bootstrap/Button';



function sectionFive() {
  return (
    <>
      <section id="parcerias" className="section-five">
        <Container>
          <h1>Conheça os nosso mantenedores!</h1>
          <Row>
            <Col xs={12} md={12} className="brand-list">
              <Image src={abdi} height="130px" alt="info" className="brand-section"/>
              <Image src={bbb} height="130px" alt="info" className="brand-section"/>
              <Image src={bmg} height="130px" alt="info" className="brand-section"/>
              <Image src={baptistaluiz} height="130px" alt="info" className="brand-section"/>
              <Image src={bossanova} height="130px" alt="info" className="brand-section"/>
              <Image src={epd} height="130px" alt="info" className="brand-section"/>
              <Image src={hsm} height="130px" alt="info" className="brand-section"/>
              <Image src={lojaintegrada} height="130px" alt="info" className="brand-section"/>
            </Col>

            <Col xs={12} md={12} className="brand-list">
              <Image src={oito} height="130px" width="198px" alt="info" className="brand-section"/>
              <Image src={piar} height="130px" alt="info" className="brand-section"/>
              <Image src={ihr} height="130px" width="198px" alt="info" className="brand-section"/>
              <Image src={salesforce} height="130px" alt="info" className="brand-section"/>
              <Image src={sicoob} height="130px" alt="info" className="brand-section"/>
            </Col>
          </Row>

        </Container>
      </section>
    </>
  );
}
export default sectionFive;
