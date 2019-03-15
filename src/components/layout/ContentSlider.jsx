import React from "react";
import Slider from "react-slick";
import Slide from './Slide';

const ContentSlider = ({slides, settings}) => {
  return (
    <div>
      <Slider {...settings}>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </Slider>
    </div>
  );
}

export default ContentSlider;