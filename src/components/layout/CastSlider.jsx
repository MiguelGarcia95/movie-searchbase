import React from "react";
import Slider from "react-slick";
import CastSlide from './CastSlide';

const displayCast = cast => {
  return cast.slice(0, 8).map(character => {
    const imageStyle = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${character.profile_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }
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