import React from 'react';
import './style/css/HomeDisplay.css';

const displayBottomCol = movies => {
  let newMovies = movies.slice(5, 11);
  return newMovies.map(movie => {
    return (
      <section key={movie.id} className="home_display_bottom_col">
        <section className="display_content">
          <section className="content_image"></section>
          <section className="content_data">
            <section className="content_title"><h1>Title Here</h1></section>
            <section className="content_details"><p>Movies data goes here here here here here</p></section>
          </section>
        </section>
      </section>
    )
  })
}

const displayTopInnerCol = movies => {
  let newMovies = movies.slice(1, 3);
  return newMovies.map(movie => {
    return (
      <section key={movie.id} className="home_display_inner_col">
        <section className="display_content">
          <section className="content_image"></section>
          <section className="content_data">
            <section className="content_title"><h1>Title Here</h1></section>
            <section className="content_details"><p>Movies data goes here here here here here</p></section>
          </section>
        </section>
      </section>
    )
  })
}

const displayBottomInnerCol = movies => {
  let newMovies = movies.slice(3, 5);
  return newMovies.map(movie => {
    return (
      <section key={movie.id} className="home_display_inner_col">
        <section className="display_content">
          <section className="content_image"></section>
          <section className="content_data">
            <section className="content_title"><h1>Title Here</h1></section>
            <section className="content_details"><p>Movies data goes here here here here here</p></section>
          </section>
        </section>
      </section>
    )
  })
}

const displayHomeCol = movies => {
  return (
    <section className="home_display_col">
      <section className="display_content">
        <section className="content_image"></section>
        <section className="content_data">
          <section className="content_title"><h1>Title Here</h1></section>
          <section className="content_details"><p>Movies data goes here here here here here</p></section>
        </section>
      </section>
    </section>
  )
}

const HomeDisplay = ({movies}) => {
  return (
    <section className='home_display'>
      <section className="home_display_row">
        {movies && displayHomeCol(movies)}
        <section className="home_display_col">
          <section className="home_display_inner_row">
            {movies && displayTopInnerCol(movies)}
          </section>  
          <section className="home_display_inner_row">
            {movies && displayBottomInnerCol(movies)}
          </section>  
        </section>
      </section>
      <section className="home_display_bottom_row">
        {movies.length > 0 && displayBottomCol(movies)}
      </section>
    </section>
  )
}

export default HomeDisplay;