import React from 'react';

import ContentSlider from '../layout/ContentSlider';
import HomeSwitch from './HomeSwitch';
import './style/css/HomeContent.css';

const HomeContent = () => {
  const settings = {
    rtl: true,
    infinite: true,
    slidesToShow: 6,
    // autoplay: true,
    arrows: false,
    swipeToSlide: true,
    speed: 500,
    slidesToScroll: 1
  };

  return (
    <section className="home_movies">
      <HomeSwitch />

      <section className="home_slider">
        <h3 className="home_slider_name">Top Movies</h3>
        <section className="home_slider_container">
          <ContentSlider settings={settings} />
        </section>
      </section>

      <section className="home_slider">
        <h3 className="home_slider_name">Top Movies</h3>
        <section className="home_slider_container">
          <ContentSlider settings={settings} />

        </section>
      </section>

      <section className="home_slider">
        <h3 className="home_slider_name">Top Movies</h3>
        <section className="home_slider_container">
          <ContentSlider settings={settings} />
        </section>
      </section>

    </section>
  )
}

export default HomeContent;