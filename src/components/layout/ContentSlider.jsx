import React from "react";
import Slider from "react-slick";
import Slide from './Slide';

const displayMovies = (movies, type, genres) => {
  return movies.map(movie => {
    return <Slide key={movie.id} movie={movie} type={type} genres={genres} />
  })
}

const ContentSlider = ({movies, settings, type, genres}) => {
  return (
    <div>
      <Slider {...settings}>
        {displayMovies(movies, type, genres)}
      </Slider>
    </div>
  );
}

export default ContentSlider;