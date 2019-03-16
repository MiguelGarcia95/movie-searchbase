import React from 'react';

import ContentSlider from '../layout/ContentSlider';
import HomeSwitch from './HomeSwitch';
import './style/css/HomeContent.css';

const settings = {
  rtl: true,
  infinite: true,
  slidesToShow: 6,
  arrows: false,
  swipeToSlide: true,
  speed: 500,
  slidesToScroll: 1
};

const dispalySliders = movies => {
  return movies.map(movieSlider => {
    return (
      <section className="home_slider" key={movieSlider.title}>
        <h3 className="home_slider_name">{movieSlider.title}</h3>
        <section className="home_slider_container">
          <ContentSlider settings={settings} movies={movieSlider.movies} />
        </section>
      </section>
    )
  })
}

const HomeContent = ({fetchType, setFetchType, movies}) => {
  return (
    <section className="home_movies">
      <HomeSwitch fetchType={fetchType} setFetchType={setFetchType} />
      {dispalySliders(movies)}
    </section>
  )
}

export default HomeContent;