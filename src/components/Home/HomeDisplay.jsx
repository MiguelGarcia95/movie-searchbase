import React from 'react';
import './style/css/HomeDisplay.css';

const HomeDisplay = () => {
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
        <section className="home_display_bottom_col"><section className="display_content"></section></section>
        <section className="home_display_bottom_col"><section className="display_content"></section></section>
        <section className="home_display_bottom_col"><section className="display_content"></section></section>
        <section className="home_display_bottom_col"><section className="display_content"></section></section>
        <section className="home_display_bottom_col"><section className="display_content"></section></section>
        <section className="home_display_bottom_col"><section className="display_content"></section></section>
      </section>
    </section>
  )
}

export default HomeDisplay;