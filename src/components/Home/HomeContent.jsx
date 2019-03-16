import React from 'react';
import {connect} from 'react-redux';

import ContentSlider from '../layout/ContentSlider';
import HomeSwitch from './HomeSwitch';
import './style/css/HomeContent.css';

const settings = {
  rtl: true,
  infinite: true,
  slidesToShow: 6,
  arrows: false,
  swipeToSlide: true,
  speed: 500,
  slidesToScroll: 1
};

const HomeContent = ({fetchType, setFetchType}) => {
  return (
    <section className="home_movies">
      <HomeSwitch fetchType={fetchType} setFetchType={setFetchType} />

      <section className="home_slider">
        <h3 className="home_slider_name">Top Movies</h3>
        <section className="home_slider_container">
          <ContentSlider settings={settings} />
        </section>
      </section>

      <section className="home_slider">
        <h3 className="home_slider_name">Top Movies</h3>
        <section className="home_slider_container">
          <ContentSlider settings={settings} />

        </section>
      </section>

      <section className="home_slider">
        <h3 className="home_slider_name">Top Movies</h3>
        <section className="home_slider_container">
          <ContentSlider settings={settings} />
        </section>
      </section>

    </section>
  )
}

// const mapStateToProps = state => {
//   return {
//     popularMovies: state.movies.popularMovies,
//     upcomingMovies: state.movies.upcomingMovies,
//     nowPlayingMovies: state.movies.nowPlayingMovies,
//     onTheAirShows: state.shows.onTheAirShows,
//     onTheAirTodayShows: state.shows.onTheAirTodayShows,
//     popularShows: state.shows.popularShows
//   }
// }

export default HomeContent;
// export default connect(mapStateToProps)(HomeContent);