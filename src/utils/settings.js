export const castSliderSettings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 3,
  speed: 500,
  responsive: [
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
      }
    },
  ]
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
      breakpoint: 1300,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 670,
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