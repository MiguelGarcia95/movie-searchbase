import React from 'react';
import './style/css/Slide.css';

const Slide = ({movie}) => {
  return (
    <section className="search_result">
      <section className="search_result_movie">
        <section className="search_result_movie_image"></section>
        <p className="search_result_movie_rating">5.0</p>  
      </section>
      <section className="search_result_movie_data">
          <section className="search_result_movie_meta"><p>2015 / Genre</p></section>  
          <section className="search_result_movie_title"><p>Movie Title</p></section>  
      </section>
    </section>
  )
}

export default Slide;
