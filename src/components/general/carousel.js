import React, { Component } from 'react';
import Slider from 'react-slick';
const image1 = require(‘./images/x.png’);
const image2 = require(‘./images/x.png’);
const image3 = require(‘./images/x.png’);

export default class Carousel extends Component ({children}) {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };
    return (
      <div>
        
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    );
  }
}
