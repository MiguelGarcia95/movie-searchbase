import React from 'react';

const getImage = (currentMovie) => {
  let image = '';
  if (currentMovie) {
    if (currentMovie.backdrop_path) {
      image = `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`;
    } else {
      image = '/images/movie/movie_bg.jpeg';
    }
  } else {
    image = '/images/movie/movie_bg.jpeg';
  }
  return image;
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

const DisplayHeader = ({currentMovie}) => {
  const imageStyle = {
    backgroundImage: `url(${getImage(currentMovie)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <section className="display_movie_header">
      <section className="display_movie_header_image" style={imageStyle}></section>
      <section className="display_movie_header_data">
        <h1 className="title">{currentMovie.title}</h1>
        <p className="meta">{displayGenres(currentMovie.genres)}</p>
        <h4 className="description">{currentMovie.overview}</h4>
        <section className="companies">
          {displayCompanies(currentMovie.production_companies)}
        </section>
      </section>
    </section>
  )
}

export default DisplayHeader;