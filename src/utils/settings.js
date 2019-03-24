export const castSliderSettings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500
};

export const movieTvSliderSettings = {
  infinite: true,
  slidesToShow: 8,
  arrows: true,
  swipeToSlide: true,
  speed: 500,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1720,
      settings: {
        slidesToShow: 7
      }
    },
    {
      breakpoint: 1520,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};