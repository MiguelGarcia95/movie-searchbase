import React from 'react';
import './style/css/CastSlide.css';
import {Link} from 'react-router-dom';


const CastSlide = ({cast}) => {
  const imageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${cast.profile_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <section className="cast_character">
      <section className="cast_image" style={imageStyle}></section>
      <section className="cast_data">
        <p className="name" >{cast.name}</p>
      </section>
    </section>
  );
}

export default CastSlide;
