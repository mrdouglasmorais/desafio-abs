import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'

import yellowSlider from '../img/yellow-slide.png';
// import Image from  'react-bootstrap/Image';
// import Button from  'react-bootstrap/Button';



function sectionThree() {
  return (
    <>
      <Container className="section-three">
        <Row>
          <Col xs={12} xm={7} lg={7} xl={7} className="left-text">
          <h1>Como <br></br>funciona?</h1>
          <p>
            É um formato de evento criado para fortalescer startups e suas comunidades 
            trabalhando lideranças, exemplo em networking. Consiste de um dia inteiro 
            de atividades divididas entre palestras, paineis sessões de mentoria e happy hour.
          </p>
          <p>
            O evento possui a duração de um dia e é itinerante, podendo
            ser promovido por qualquer agentedo ecosistema, em
            qualquer cidade do Brasil, desde que aprovado
            previamente pela Abstartups.
          </p>
          <p>
            Sabemos das dores que todos os empreendedores passam no dia a dia para
            conduzir seu negócio. As dores vão desde a necessidade vão de um conteúdo
            de qualidade a necessidade de interação com outros empreendedores do mesmo
            nível para trocar experiências.
          </p>
          <p>
            Pensando nisso o StartupON nasceu para fortalescer
            startups e suas comunidades trabalhando lideranças,
            exemplos e networking.
          </p>
          </Col>
          <Col xs={12} xm={5} lg={5} xl={5}>
           <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={yellowSlider}
                  alt="Primeiro slider"
                />
                <Carousel.Caption>
                  <h3>MANHÃ: Palestras+Painel</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={yellowSlider}
                  alt="Segundo slider"
                />
                <Carousel.Caption>
                  <h3>MANHÃ: Palestras+Painel</h3>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={yellowSlider}
                  alt="Terceiro slider"
                />
                <Carousel.Caption>
                  <h3>MANHÃ: Palestras+Painel</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container className="complement-infos--section">
        <Row>
          <Col className="text-complement" xs={12} xm={4} lg={4} xl={4}>
            <h1>34</h1>
            <h4>Edições realizadas</h4>
          </Col>
          <Col className="text-complement" xs={12} xm={4} lg={4} xl={4}>
            <h1>536</h1>
            <h4>Horas de mentoria</h4>
          </Col>
          <Col className="text-complement" xs={12} xm={4} lg={4} xl={4}>
            <h1>4256</h1>
            <h4>Partipantes</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default sectionThree;
