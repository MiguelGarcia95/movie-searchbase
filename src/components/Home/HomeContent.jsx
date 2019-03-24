import React from 'react';
import ContentSlider from '../layout/ContentSlider';
import HomeSwitch from './HomeSwitch';
import {movieTvSliderSettings} from '../../utils/settings';

import './style/css/HomeContent.css';

const dispalySliders = (movies, genres) => {
  return movies.map(movieSlider => {
    return (
      <section className="home_slider" key={movieSlider.title}>
        <h3 className="home_slider_name">{movieSlider.title}</h3>
        <section className="home_slider_container">
          <ContentSlider settings={movieTvSliderSettings} movies={movieSlider.movies} type={movieSlider.type} genres={genres} />
        </section>
      </section>
    )
  })
}

const HomeContent = ({movies, genres}) => {
  return (
    <section className="home_movies">
      <HomeSwitch />
      {dispalySliders(movies, genres)}
    </section>
  )
}

export default HomeContent;