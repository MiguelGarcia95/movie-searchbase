import React from "react";
import Slider from "react-slick";
import Slide from './Slide';

const displayMovies = (movies, type) => {
  return movies.map(movie => {
    return <Slide key={movie.id} movie={movie} type={type} />
  })
}

const ContentSlider = ({movies, settings, type}) => {
  return (
    <div>
      <Slider {...settings}>
        {displayMovies(movies, type)}
      </Slider>
    </div>
  );
}

export default ContentSlider;