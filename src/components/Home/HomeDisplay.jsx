import React from 'react';
import './style/css/HomeDisplay.css';

const getTitle = (movie, type) => {
  let title = '';
  if (type === 'movies') {
    title = movie.title
  } else {
    title = movie.name
  }
  return title;
}

// const getImage = (movie, type) => {
//   // poster_path

//   // backdrop_path
//   // poster_path
// }

const getYear = (movie, type) => {
  let year = '';
  if (type === 'movies') {
    year = movie.release_date.slice(0,4);
  } else {
    year = movie.first_air_date.slice(0,4);
  }
  return year;
}

const getGenreFromId = (genreId, genres) => {
  return genres.reduce((genreName, genre) => {
    if (genre.id === genreId) {
      genreName = genre.name;
    }
    return genreName;
  }, '');
}

const getGenre = (movie, genres) => {
  return getGenreFromId(movie.genre_ids[0], genres);
}

const displayBottomCol = (movies, genres, fetchType) => {
  let newMovies = movies.slice(5, 11);
  return newMovies.map(movie => {
    const imageStyle = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
    return (
      <section key={movie.id} className="home_display_bottom_col">
        <section className="display_content">
          <section className="content_image" style={imageStyle}></section>
          <section className="content_data">
            <section className="content_title"><h1>{getTitle(movie, fetchType)}</h1></section>
            <section className="content_details"><p>{getYear(movie, fetchType)} / {getGenre(movie, genres)}</p></section>
          </section>
        </section>
      </section>
    )
  })
}

const displayTopInnerCol = (movies, genres, fetchType) => {
  let newMovies = movies.slice(1, 3);
  return newMovies.map(movie => {
    const imageStyle = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
    return (
      <section key={movie.id} className="home_display_inner_col">
        <section className="display_content">
          <section className="content_image" style={imageStyle}></section>
          <section className="content_data">
            <section className="content_title"><h1>{getTitle(movie, fetchType)}</h1></section>
            <section className="content_details"><p>{getYear(movie, fetchType)} / {getGenre(movie, genres)}</p></section>
          </section>
        </section>
      </section>
    )
  })
}

const displayBottomInnerCol = (movies, genres, fetchType) => {
  let newMovies = movies.slice(3, 5);
  return newMovies.map(movie => {
    const imageStyle = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
    return (
      <section key={movie.id} className="home_display_inner_col">
        <section className="display_content">
          <section className="content_image" style={imageStyle}></section>
          <section className="content_data">
            <section className="content_title"><h1>{getTitle(movie, fetchType)}</h1></section>
            <section className="content_details"><p>{getYear(movie, fetchType)} / {getGenre(movie, genres)}</p></section>
          </section>
        </section>
      </section>
    )
  })
}

const displayHomeCol = (movie, genres, fetchType) => {
  const imageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
    <section className="home_display_col">
      <section className="display_content">
        <section className="content_image" style={imageStyle} ></section>
        <section className="content_data">
          <section className="content_title"><h1>{getTitle(movie, fetchType)}</h1></section>
          <section className="content_details"><p>{getYear(movie, fetchType)} / {getGenre(movie, genres)}</p></section>
        </section>
      </section>
    </section>
  )
}

const HomeDisplay = ({movies, genres, fetchType}) => {
  return (
    <section className='home_display'>
      <section className="home_display_row">
        {movies.length > 0 && displayHomeCol(movies[0], genres, fetchType)}
        <section className="home_display_col">
          <section className="home_display_inner_row">
            {movies && displayTopInnerCol(movies, genres, fetchType)}
          </section>  
          <section className="home_display_inner_row">
            {movies && displayBottomInnerCol(movies, genres, fetchType)}
          </section>  
        </section>
      </section>
      <section className="home_display_bottom_row">
        {movies.length && displayBottomCol(movies, genres, fetchType)}
      </section>
    </section>
  )
}

export default HomeDisplay;