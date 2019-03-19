import React from 'react';
import './style/css/Slide.css';
import {Link} from 'react-router-dom';

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
    if (genre.id === genreId) {
      genreName = genre.name;
    }
    return genreName;
  }, '');
}

const getGenre = (movie, genres) => {
  return getGenreFromId(movie.genre_ids[0], genres);
}

// const movieRatingColor = rating => {
//   if (rating > 7) {
//     return 'rgb(70, 182, 98)';
//   } else {
//     return 'rgb(139, 54, 54)';
//   }
// }

const Slide = ({movie, type, genres}) => {
  const imageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
    <section className="search_result">
      <section className="search_result_movie">
        <section className="search_result_movie_image" style={imageStyle}></section>
        <p className="search_result_movie_rating">{movie.vote_average}</p>  
        <Link to={`${type}/${movie.id}`}>
          <p className="search_result_movie_link"><i className="fas fa-expand-arrows-alt "></i></p>  
        </Link>
      </section>
      <section className="search_result_movie_data">
          <section className="search_result_movie_meta"><p>{getYear(movie, type)} / {getGenre(movie, genres)}</p></section>  
          <section className="search_result_movie_title"><p>{getTitle(movie, type)}</p></section>  
      </section>
    </section>
  );
}

export default Slide;
