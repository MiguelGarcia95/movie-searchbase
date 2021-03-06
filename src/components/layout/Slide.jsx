import React from 'react';
import './style/css/Slide.css';
import {Link} from 'react-router-dom';
import {getTitle, getYear, getGenre, getPoster, roundRating} from '../../utils/functions';

const Slide = ({movie, type, genres}) => {
  const imageStyle = {
    backgroundImage: `url(${getPoster(movie)})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
    <section className="search_result slide">
      <section className="search_result_movie">
        <section className="search_result_movie_image" style={imageStyle}></section>
        <p className="search_result_movie_rating">{roundRating(movie.vote_average)}</p>  
        <Link to={`/${type}/${movie.id}`}>
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
