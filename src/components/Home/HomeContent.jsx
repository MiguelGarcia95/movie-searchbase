import React from 'react';
import './style/css/HomeContent.css';

const HomeContent = () => {
  return (
    <section className="home_movies">
      <section className="home_switch_container">
        <section className="home_switch">
          <section className="home_switch_select">
            <p className="home_switch_select_content">Movies</p>
            <section className="home_switch_select_color"></section>
          </section>
          <section className="home_switch_select">
            <p className="home_switch_select_content">Shows</p>
            <section className="home_switch_select_color"></section>
          </section>
        </section>
      </section>

      <section className="home_slider">
        <h3 className="home_slider_name">Top Movies</h3>
        <section className="home_slider_container">
          <h1>Slider Here</h1>
        </section>
      </section>
      <section className="home_slider">
        <h3 className="home_slider_name">Top Movies</h3>
        <section className="home_slider_container">
          <h1>Slider Here</h1>
        </section>
      </section>
      <section className="home_slider">
        <h3 className="home_slider_name">Top Movies</h3>
        <section className="home_slider_container">
          <h1>Slider Here</h1>
        </section>
      </section>
    </section>
  )
}

export default HomeContent;