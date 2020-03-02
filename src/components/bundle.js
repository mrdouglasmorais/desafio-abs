import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Ilustration from "../img/bg1.png";


function Bundle() {
  return (


    
    <>
    <Container fluid className="primary-bundle">
      <Row>
        <Col xs={12} sm={6} className="primary-bundle--content">
          <h1>Um dia de conteúdo e networking</h1>

          <h5>
          Um dia para economizar seu tempo de aprendizado.
          interaja com empreendedores e especialistas que
          vão levar sua startup a outro nível
          </h5>
        </Col>
        <Col xs={8} sm={6} className="primary-bundle--contentimg">
          <Image src={Ilustration} width="100%" heigth="auto" alt="Logo" />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Bundle;
