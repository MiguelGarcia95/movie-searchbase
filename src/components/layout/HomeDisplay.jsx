import React from 'react';
import './css/HomeDisplay.css';

const HomeDisplay = () => {
  return (
    <section class='home_display'>
      <section class="home_display_row">
        <section class="home_display_col"><section class="display_content"></section></section>
        <section class="home_display_col">
          <section class="home_display_inner_row">
            <section class="home_display_inner_col"><section class="display_content"></section></section>
            <section class="home_display_inner_col"><section class="display_content"></section></section>
          </section>  
          <section class="home_display_inner_row">
            <section class="home_display_inner_col"><section class="display_content"></section></section>
            <section class="home_display_inner_col"><section class="display_content"></section></section>
          </section>  
        </section>
      </section>
      <section class="home_display_bottom_row">
        <section class="home_display_bottom_col"><section class="display_content"></section></section>
        <section class="home_display_bottom_col"><section class="display_content"></section></section>
        <section class="home_display_bottom_col"><section class="display_content"></section></section>
        <section class="home_display_bottom_col"><section class="display_content"></section></section>
        <section class="home_display_bottom_col"><section class="display_content"></section></section>
        <section class="home_display_bottom_col"><section class="display_content"></section></section>
      </section>
    </section>
  )
}

export default HomeDisplay;