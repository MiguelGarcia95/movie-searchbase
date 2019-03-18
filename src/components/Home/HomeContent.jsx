import React from 'react';

import ContentSlider from '../layout/ContentSlider';
import HomeSwitch from './HomeSwitch';
import './style/css/HomeContent.css';

const settings = {
  rtl: true,
  infinite: true,
  slidesToShow: 8,
  arrows: false,
  swipeToSlide: true,
  speed: 500,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1720,
      settings: {
        slidesToShow: 7
      }
    },
    {
      breakpoint: 1520,
      settings: {
        slidesToShow: 6
      }
    }
  ]
};

const dispalySliders = (movies, genres) => {
  return movies.map(movieSlider => {
    return (
      <section className="home_slider" key={movieSlider.title}>
        <h3 className="home_slider_name">{movieSlider.title}</h3>
        <section className="home_slider_container">
          <ContentSlider settings={settings} movies={movieSlider.movies} type={movieSlider.type} genres={genres} />
        </section>
      </section>
    )
  })
}

const HomeContent = ({fetchType, setFetchType, movies, genres}) => {
  return (
    <section className="home_movies">
      <HomeSwitch fetchType={fetchType} setFetchType={setFetchType} />
      {dispalySliders(movies, genres)}
    </section>
  )
}

export default HomeContent;