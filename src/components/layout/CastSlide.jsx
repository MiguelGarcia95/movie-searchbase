import React from 'react';
import './style/css/CastSlide.css';
import {Link} from 'react-router-dom';


const CastSlide = ({character}) => {
  const imageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${character.profile_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <section className="cast_character">
      <section className="cast_image" style={imageStyle}></section>
      <Link to={`/people/${character.id}`}>
        <p className="search_result_movie_link"><i className="fas fa-expand-arrows-alt "></i></p>  
      </Link>
      <section className="cast_data">
        <p className="name" >{character.name}</p>
      </section>
    </section>
  );
}

export default CastSlide;
