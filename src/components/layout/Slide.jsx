import React from 'react';
import './style/css/Slide.css';

const getTitle = (movie, type) => {
  let title = '';
  if (type === 'movies') {
    title = movie.title
  } else {
    title = movie.name
  }
  return title;
}

const getYear = (movie, type) => {
  let year = '';
  if (type === 'movies') {
    year = movie.release_date.slice(0,4);
  } else {
    year = movie.first_air_date.slice(0,4);
  }
  return year;
}

const Slide = ({movie, type}) => {
  return (
    <section className="search_result">
      <section className="search_result_movie">
        <section className="search_result_movie_image"></section>
        <p className="search_result_movie_rating">{movie.vote_average}</p>  
      </section>
      <section className="search_result_movie_data">
          <section className="search_result_movie_meta"><p>{getYear(movie, type)} / Genre</p></section>  
          <section className="search_result_movie_title"><p>{getTitle(movie, type)}</p></section>  
      </section>
    </section>
  )
}

export default Slide;
