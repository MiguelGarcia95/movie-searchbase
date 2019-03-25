import React from 'react';

const getImage = (currentMovie) => {
  if (currentMovie) {
    if (currentMovie.backdrop_path) {
      return `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`;
    } else {
      return '/images/movie/movie_bg.jpeg';
    }
  } else {
    return '/images/movie/movie_bg.jpeg';
  }
}

const getPoster = currentMovie => {
  if (currentMovie) {
    if (currentMovie.poster_path) {
      return `https://image.tmdb.org/t/p/original${currentMovie.poster_path}`;
    } else {
      return '/images/movie/movie_cover.jpg';
    }
  } else {
    return '/images/movie/movie_cover.jpg';
  }
}

const displayCompanies = (companies) => {
  return companies.map(company => {
    return (
      <section key={company.name} title={company.name} className="company">
        <img src={`https://image.tmdb.org/t/p/original${company.logo_path}`} alt={`${company.name} logo`}/>
      </section>
    )
  })
}

const displayGenres = (genres) => {
  return genres.map(genre => {
    return <span key={genre.id} className="genre">{genre.name}</span>
  })
}

const getName = (currentMovie, type) => {
  if (type === 'movies') {
    return currentMovie.title;
  } else {
    return currentMovie.name;
  }
}

const DisplayHeader = ({currentMovie, type}) => {
  const imageStyle = {
    backgroundImage: `url(${getImage(currentMovie)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <section className="display_movie_header">
      <section className="display_movie_header_image" style={imageStyle}></section>
      <section className="display_movie_header_content">
        <section className="display_movie_header_background">
          <section className="top"></section>
          <section className="bottom"></section>
        </section>
        <section className="display_header_data">
          <section className="display_poster">
            <section className="display_poster_image"><img src={getPoster(currentMovie)} /></section>
          </section>
          <section className="title_meta">
            <h1 className="title">{getName(currentMovie, type)}</h1>
            <p className="meta">{displayGenres(currentMovie.genres)}</p>
          </section>
          <section className="display_header_content">
            <p className="description">{currentMovie.overview}</p>
          </section>
        </section>
      </section>
    </section>
  )
}

export default DisplayHeader;