import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function sectionFour() {
  return (
    <>
      <section id="faleconosco" className="section-four">
        <Container>
        <Col xs={12} xm={12} lg={12} xl={12}>
        <div className="aps-left"><h2>“</h2></div>
          <h1>Foi um dia de muita troca, aprendizado<br></br>
          e networking, o evento foi uma<br></br>
          experiência marcante para quem teve<br></br>
          a chance de participar.</h1>
          <p><b>Danilo Sciumbata </b>Founder Oca Coworking</p>
          <div className="aps-right"><h2>”</h2></div>
          </Col>
        </Container>
      </section>

      <Container className="section-call-action">
        <h1 className="call-action">Quer levar o startupon <br></br>para sua cidade?</h1>
        <Row>
          <Col className="call-button" xs={9} xm={3} lg={3} xl={3}>
            <Button>Fale conosco!</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default sectionFour;
