import React from 'react';
import './style/css/HomeContent.css';

const HomeContent = () => {
  return (
    <section class="home_movies">
      <section class="home_switch_container">
        <section class="home_switch">
          <section class="home_switch_select">
            <p class="home_switch_select_content">Movies</p>
            <section class="home_switch_select_color"></section>
          </section>
          <section class="home_switch_select">
            <p class="home_switch_select_content">Shows</p>
            <section class="home_switch_select_color"></section>
          </section>
        </section>
      </section>

      <section class="home_slider">
        <h3 class="home_slider_name">Top Movies</h3>
        <section class="home_slider_container">
          <h1>Slider Here</h1>
        </section>
      </section>
      <section class="home_slider">
        <h3 class="home_slider_name">Top Movies</h3>
        <section class="home_slider_container">
          <h1>Slider Here</h1>
        </section>
      </section>
      <section class="home_slider">
        <h3 class="home_slider_name">Top Movies</h3>
        <section class="home_slider_container">
          <h1>Slider Here</h1>
        </section>
      </section>
    </section>
  )
}

export default HomeContent;