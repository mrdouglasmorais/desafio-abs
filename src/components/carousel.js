import React, { Component } from 'react';
import Carousel from 'react-spring-3d-carousel';
import uuidv4 from 'uuid';
import { config } from 'react-spring';

import slideRandon from '../img/caroussel-rbp.png';

export default class CarouselSPA extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 4,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src={slideRandon} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={slideRandon} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={slideRandon} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={slideRandon} alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={slideRandon} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src={slideRandon} alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src={slideRandon} alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src={slideRandon}  alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div className="carousel-page">
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
