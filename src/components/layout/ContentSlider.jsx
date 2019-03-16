import React from "react";
import Slider from "react-slick";
import Slide from './Slide';

const displayMovies = (movies) => {
  return movies.map(movie => {
    return <Slide key={movie.id} movie={movie} />
  })
}

const ContentSlider = ({movies, settings}) => {
  return (
    <div>
      <Slider {...settings}>
        {displayMovies(movies)}
      </Slider>
    </div>
  );
}

export default ContentSlider;