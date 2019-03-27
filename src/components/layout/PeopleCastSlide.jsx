import React from 'react';
import './style/css/Slide.css';
import {Link} from 'react-router-dom';
import {getTitleForCast, getYearForCast, getGenre} from '../../utils/functions';

const PeopleCastSlide = ({movie, type, genres, isCastResult}) => {
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
        <Link to={`/${type}/${movie.id}`}>
          <p className="search_result_movie_link"><i className="fas fa-expand-arrows-alt "></i></p>  
        </Link>
      </section>
      <section className="search_result_movie_data">
          <section className="search_result_movie_meta"><p>{getYearForCast(movie, type, isCastResult)} / {getGenre(movie, genres)}</p></section>  
          <section className="search_result_movie_title"><p>{getTitleForCast(movie, type, isCastResult)}</p></section>  
      </section>
    </section>
  );
}

export default PeopleCastSlide;