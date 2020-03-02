import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from  'react-bootstrap/Image';
import Button from  'react-bootstrap/Button';

import IconPalestras from '../img/pal_icon.png';

function sectionOne() {
  return (
    <>
    <div className="section-one">
    <Container xm={12}>
      <h1>O que você vai encontrar no startup on?</h1>
      <Row>
        <Col xm={3}>
          <Image 
            src={IconPalestras}
            alt=''
            fluid
          />
          <h4>Palestras</h4>
          <p>O objetivo é colocar você diante de fundadores de startups e aprender com experiências reais</p>
        </Col>

        <Col xm={3}>
          <Image 
            src={IconPalestras}
            alt=''
            fluid
          />
          <h4>Palestras</h4>
          <p>O objetivo é colocar você diante de fundadores de startups e aprender com experiências reais</p>
        </Col>

        <Col xm={3} >
          <Image 
            src={IconPalestras}
            alt=''
            fluid
          />
          <h4>Palestras</h4>
          <p>O objetivo é colocar você diante de fundadores de startups e aprender com experiências reais</p>
        </Col>

        <Col xm={3}>
          <Image 
            src={IconPalestras}
            alt=''
            fluid
          />
          <h4>Palestras</h4>
          <p>O objetivo é colocar você diante de fundadores de startups e aprender com experiências reais</p>
        </Col>
      </Row>
      <Row>
      <Col sm></Col>
      <Col sm><Button variant="outline-light" size="lg">Próximas Edições</Button>{' '}</Col>
      <Col sm></Col>
      </Row>
 
    </Container>

    </div>
    </>
  );
}
export default sectionOne;
