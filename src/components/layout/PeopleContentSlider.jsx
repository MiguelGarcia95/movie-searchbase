import React from "react";
import Slider from "react-slick";
import PeopleCastSlide from './PeopleCastSlide';

const displayMovies = (movies, type, genres, isCastResult) => {
  return movies.map(movie => {
    return <PeopleCastSlide key={movie.id} movie={movie} type={type} genres={genres} isCastResult={isCastResult} />
  })
}

const ContentSlider = ({movies, settings, type, genres, isCastResult}) => {
  return (
    <div>
      <Slider {...settings}>
        {displayMovies(movies, type, genres, isCastResult)}
      </Slider>
    </div>
  );
}

export default ContentSlider;