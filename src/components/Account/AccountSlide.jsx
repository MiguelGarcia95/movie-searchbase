import React from 'react';
import './style/css/AccountSlide.css';
import {Link} from 'react-router-dom';
import {getTitle, getYear, getGenre} from '../../utils/functions';
import './style/css/AccountSlide.css';

const AccountSlide = ({movie, type, genres}) => {
  const imageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
    <section className="account_slide">
      <section className="account_movie">
        <section className="account_movie_image" style={imageStyle}></section>
        <p className="account_movie_image_rating">{movie.vote_average}</p>  
        <Link to={`/${type}/${movie.id}`}>
          <p className="account_movie_image_link"><i className="fas fa-expand-arrows-alt "></i></p>  
        </Link>
      </section>

      <section className="account_movie_data">
          <section className="account_movie_meta"><p>{getYear(movie, type)} / {getGenre(movie, genres)}</p></section>  
          <section className="account_movie_title"><p>{getTitle(movie, type)}</p></section>  
      </section>
    </section>
  );
}

export default AccountSlide;
