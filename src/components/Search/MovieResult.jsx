import React from 'react';
import {Link} from 'react-router-dom';
import './style/css/MovieResult.css';

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

const MovieResult = ({movie, type, genres}) => {
  const imageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <Link to={`/${type}/${movie.id}`}>
      <section className="search_result">
        <section className="search_result_movie">
          <section className="search_result_movie_image" style={imageStyle}></section>
          <p className="search_result_movie_rating">{movie.vote_average}</p>  
        </section>
        <section className="search_result_movie_data">
            <section className="search_result_movie_meta"><p>{getYear(movie, type)} / {getGenre(movie, genres)}</p></section>  
            <section className="search_result_movie_title"><p>{getTitle(movie, type)}</p></section>  
        </section>
      </section>
    </Link>
  )
}

export default MovieResult;