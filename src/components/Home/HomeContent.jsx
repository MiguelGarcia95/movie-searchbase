import React from 'react';

import ContentSlider from '../layout/ContentSlider';
import HomeSwitch from './HomeSwitch';
import './style/css/HomeContent.css';

const HomeContent = () => {
  return (
    <section className="home_movies">
      <HomeSwitch />
      <ContentSlider />
      <ContentSlider />
      <ContentSlider />
    </section>
  )
}

export default HomeContent;