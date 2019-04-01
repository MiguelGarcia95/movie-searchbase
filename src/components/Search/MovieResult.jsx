import React from 'react';
import {Link} from 'react-router-dom';
import './style/css/MovieResult.css';
import {getTitle, getYear, getGenre, getPoster} from '../../utils/functions';

const roundRating = (rating) => {
  if (rating.toFixed(0).length === 2) {
    return rating.toFixed(0);
  } else {
    return rating.toFixed(1);
  }
}

const MovieResult = ({movie, type, genres}) => {
  const imageStyle = {
    backgroundImage: `url(${getPoster(movie)})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <Link to={`/${type}/${movie.id}`}>
      <section className="search_result">
        <section className="search_result_movie">
          <section className="search_result_movie_image" style={imageStyle}></section>
          <p className="search_result_movie_rating">{roundRating(movie.vote_average)}</p>  
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