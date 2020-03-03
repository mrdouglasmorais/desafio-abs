import React from 'react';

import {Carousel} from '3d-react-carousal';
import Image from  'react-bootstrap/Image';
import ThumbnailIMG from '../img/ribeirao-slide.jpg';



function carousel() {
  let slides = [
    <Image src={ThumbnailIMG} width="300px" alt="1" />,
    <Image src={ThumbnailIMG} width="300px" alt="2" />  ,
    <Image src={ThumbnailIMG} width="300px" alt="3" />  ,
    <Image src={ThumbnailIMG} width="300px" alt="4" />  ,
    <Image src={ThumbnailIMG} width="300px" alt="5" /> ]

  return (
    <>
      <Carousel slides={slides}/>
    </>
  );
}
export default carousel;
