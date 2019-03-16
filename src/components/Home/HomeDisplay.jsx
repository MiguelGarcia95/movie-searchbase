import React from 'react';
import './style/css/HomeDisplay.css';

const displayBottomCol = (movies) => {
  let newMovies = movies.slice(5, 11);
  return newMovies.forEach(movie => {
    return (
      <section className="home_display_bottom_col"><section className="display_content"></section></section>
    )
  })
}

const HomeDisplay = ({movies}) => {
  return (
    <section className='home_display'>
      <section className="home_display_row">
        <section className="home_display_col"><section className="display_content"></section></section>
        <section className="home_display_col">
          <section className="home_display_inner_row">
            <section className="home_display_inner_col"><section className="display_content"></section></section>
            <section className="home_display_inner_col"><section className="display_content"></section></section>
          </section>  
          <section className="home_display_inner_row">
            <section className="home_display_inner_col"><section className="display_content"></section></section>
            <section className="home_display_inner_col"><section className="display_content"></section></section>
          </section>  
        </section>
      </section>
      <section className="home_display_bottom_row">
        {/* <section className="home_display_bottom_col"><section className="display_content"></section></section>
        <section className="home_display_bottom_col"><section className="display_content"></section></section>
        <section className="home_display_bottom_col"><section className="display_content"></section></section>
        <section className="home_display_bottom_col"><section className="display_content"></section></section>
        <section className="home_display_bottom_col"><section className="display_content"></section></section>
        <section className="home_display_bottom_col"><section className="display_content"></section></section> */}
        {movies.length > 0 && displayBottomCol(movies)}
      </section>
    </section>
  )
}

export default HomeDisplay;