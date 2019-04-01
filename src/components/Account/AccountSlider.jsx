import React from "react";
import Slider from "react-slick";
import AccountSlide from './AccountSlide';

const displayMovies = (movies, type, genres, sliderType, sessionId, accountId, removeFromFavorites) => {
  return movies.map(movie => {
    return (
      <AccountSlide 
        type={type} 
        movie={movie} 
        key={movie.id} 
        genres={genres} 
        sessionId={sessionId} 
        accountId={accountId} 
        sliderType={sliderType} 
        removeFromFavorites={removeFromFavorites} 
      />
    )
  })
}

const getSlidesToShow = (movies, width) => {
  if (!width) {
    if (movies.length >= 4) {
      return 4;
    } else if (movies.length < 4) {
      return movies.length;
    }
  } else if (width === 1080) {
    if (movies.length >= 3) {
      return 3;
    } else if (movies.length < 3) {
      return movies.length;
    }
  } else if (width === 700) {
    if (movies.length >= 2) {
      return 2;
    } else if (movies.length < 2) {
      return movies.length;
    }
  } else if (width === 530) {
    return 1;
  }
}

const AccountSlider = ({currentPage, totalPages, movies, totalResults, sliderName, type, genres, sliderType, removeFromFavorites, sessionId, accountId}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(movies),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: getSlidesToShow(movies, 1080)
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: getSlidesToShow(movies, 700)
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: getSlidesToShow(movies, 530)
        }
      },
    ]
  };

  return (
    <section className="account_content_section">
      <section className="account_content_name"><h2>{sliderName} <span>({totalResults})</span></h2></section>
      <section className="account_content_slider">
        <Slider {...settings}>
          {displayMovies(movies, type, genres, sliderType, sessionId, accountId, removeFromFavorites)}
        </Slider>
      </section>
    </section>
  );
}

export default AccountSlider;