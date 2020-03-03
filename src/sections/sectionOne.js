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
    <section id="sobre">
    <div className="section-one">
    <Container xs={12} xm={12} lg={12} xl={12} className="section-one--container">
      <h1>O que você vai encontrar no startup on?</h1>
      <Row>
        <Col xs={6} xm={3} lg={3} xl={3} className="section-one--container">
          <Image 
            src={IconPalestras}
            alt=''
            fluid
          />
          <h4>Palestras</h4>
          <p>O objetivo é colocar você diante de fundadores de startups e aprender com experiências reais</p>
        </Col>

        <Col xs={6} xm={3} lg={3} xl={3}>
          <Image 
            src={IconPalestras}
            alt=''
            fluid
          />
          <h4>Mentorias</h4>
          <p>Uma tarde para você ter rodadas de mentorias com especialistas em</p>
        </Col>

        <Col xs={6} xm={3} lg={3} xl={3}>
          <Image 
            src={IconPalestras}
            alt=''
            fluid
          />
          <h4>Conexões</h4>
          <p>Para ir além empreendedores devem estar bem conectados. Conheça e faça parte da rede ABStartups.</p>
        </Col>

        <Col xs={6} xm={3} lg={3} xl={3}>
          <Image 
            src={IconPalestras}
            alt=''
            fluid
          />
          <h4>Comunidade</h4>
          <p>Ecosistema maduro precisa ser colaborativo para que</p>
        </Col>
      </Row>
      <Row>
      <Col sm></Col>
      <Col xs={4} xm={4} lg={4} xl={4}><Button variant="outline-light" size="lg">Próximas Edições</Button>{' '}</Col>
      <Col sm></Col>
      </Row>
 
    </Container>

    </div>
    </section>
    </>
  );
}
export default sectionOne;
