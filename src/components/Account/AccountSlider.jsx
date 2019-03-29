import React from "react";
import Slider from "react-slick";
import AccountSlide from './AccountSlide';

const displayCast = cast => {
  return cast.slice(0, 20).map(character => {
    return <AccountSlide key={character.id} character={character}/>
  })
}

const AccountSlider = ({cast, settings}) => {
  return (
    <section className='cast_slider'>
      <Slider {...settings}>
        {displayCast(cast)}
      </Slider>
    </section>
  );
}

export default AccountSlider;