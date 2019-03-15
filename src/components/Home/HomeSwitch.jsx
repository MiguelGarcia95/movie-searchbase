import React from 'react';
import './style/css/HomeSwitch.css';

const isFetchMovies = fetchType => fetchType === 'movies' ? 'active' : ''; 
const isFetchShows = fetchType => fetchType === 'shows' ? 'active' : ''; 

const HomeSwitch = ({fetchType, setFetchType}) => {
  return (
    <section className="home_switch_container">
      <section className="home_switch">
        <section className={`home_switch_select ${isFetchMovies(fetchType)}`}>
          <p className="home_switch_select_content" onClick={() => setFetchType('movies')}>Movies</p>
          <section className="home_switch_select_color"></section>
        </section>
        <section className={`home_switch_select ${isFetchShows(fetchType)}`}>
          <p className="home_switch_select_content" onClick={() => setFetchType('shows')}>Shows</p>
          <section className="home_switch_select_color"></section>
        </section>
      </section>
    </section>
  )
}

export default HomeSwitch;