export const getTitle = (movie, type) => {
  if (type === 'movies') {
    return movie.title
  } else {
    return movie.name
  }
}

export const getYear = (movie, type) => {
  if (type === 'movies') {
    return movie.release_date.slice(0,4);
  } else {
    return movie.first_air_date.slice(0,4);
  }
}

export const getGenreFromId = (genreId, genres) => {
  return genres.reduce((genreName, genre) => {
    if (genre.id === genreId) {
      genreName = genre.name;
    }
    return genreName;
  }, '');
}

export const getGenre = (movie, genres) => {
  return getGenreFromId(movie.genre_ids[0], genres);
}

export const getPoster = currentMovie => {
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

export const getImage = (currentMovie) => {
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