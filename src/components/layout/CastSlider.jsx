import React from "react";
import Slider from "react-slick";
import CastSlide from './CastSlide';

const displayCast = cast => {
  return cast.slice(0, 8).map(character => {
    return <CastSlide key={character.id} character={character}/>
  })
}

const CastSlider = ({cast, settings}) => {
  return (
    <div>
      <Slider {...settings}>
        {displayCast(cast)}
      </Slider>
    </div>
  );
}

export default CastSlider;