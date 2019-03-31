import React from "react";
import Slider from "react-slick";
import AccountSlide from './AccountSlide';

const displayCast = cast => {
  return cast.slice(0, 20).map(character => {
    return <AccountSlide key={character.id} character={character}/>
  })
}

const AccountSlider = ({cast, settings, sliderName}) => {
  return (
    <section className="account_content_section">
      <section className="account_content_name"><h2>{sliderName}</h2></section>
      <section className="account_content_slider">
        {/* <Slider {...settings}>
          {displayCast(cast)}
        </Slider> */}
      </section>
    </section>
  );
}

export default AccountSlider;