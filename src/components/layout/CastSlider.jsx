import React from "react";
import Slider from "react-slick";
import CastSlide from './CastSlide';

const displayCast = cast => {
  return cast.slice(0, 20).map(character => {
    return <CastSlide key={character.id} character={character}/>
  })
}

const CastSlider = ({cast, settings}) => {
  return (
    <section className='cast_slider'>
      <Slider {...settings}>
        {displayCast(cast)}
      </Slider>
    </section>
  );
}

export default CastSlider;