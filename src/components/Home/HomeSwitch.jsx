import React from 'react';
import './style/css/HomeSwitch.css';

const HomeSwitch = () => {
  return (
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
  )
}

export default HomeSwitch;