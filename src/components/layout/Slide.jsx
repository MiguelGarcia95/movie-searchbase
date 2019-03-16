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

const getGenreFromId = (genreId, genres) => {
  return genres.reduce((genreName, genre) => {
    let genreIdName = '';
    if (genre.id === genreId) {
      genreName = genre.name;
    }
    return genreName;
  }, '');
}

const getGenre = (movie, genres) => {
  let genre = '';
  genre = getGenreFromId(movie.genre_ids[0], genres);
  return genre;
}

const Slide = ({movie, type, genres}) => {
  return (
    <section className="search_result">
      <section className="search_result_movie">
        <section className="search_result_movie_image"></section>
        <p className="search_result_movie_rating">{movie.vote_average}</p>  
      </section>
      <section className="search_result_movie_data">
          <section className="search_result_movie_meta"><p>{getYear(movie, type)} / {getGenre(movie, genres)}</p></section>  
          <section className="search_result_movie_title"><p>{getTitle(movie, type)}</p></section>  
      </section>
    </section>
  )
}

export default Slide;
