import React from "react";
import Slider from "react-slick";
import AccountSlide from './AccountSlide';

const displayMovies = (movies, type, genres) => {
  return movies.map(movie => {
    return <AccountSlide key={movie.id} movie={movie} type={type} genres={genres} />
  })
}

const getSlidesToShow = (movies, width) => {
  if (!width) {
    if (movies.length >= 4) {
      return 4;
    } else if (movies.length < 4) {
      return movies.length;
    }
  } else {

  }
}

const AccountSlider = ({currentPage, totalPages, movies, totalResults, sliderName, type, genres}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(movies),
    slidesToScroll: 1
  };

  return (
    <section className="account_content_section">
      <section className="account_content_name"><h2>{sliderName} <span>({totalResults})</span></h2></section>
      <section className="account_content_slider">
        <Slider {...settings}>
          {displayMovies(movies, type, genres)}
        </Slider>
      </section>
    </section>
  );
}

export default AccountSlider;