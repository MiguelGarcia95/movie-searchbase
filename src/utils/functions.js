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