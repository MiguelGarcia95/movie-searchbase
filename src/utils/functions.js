export const getTitle = (movie, type) => {
  if (type === 'movies') {
    return movie.title
  }  else {
    return movie.name
  }
}

export const getYear = (movie, type) => {
  if (type === 'movies') {
    if (movie.release_date) {
      return movie.release_date.slice(0,4);
    } else {
      return 'N/A';
    }
  } else {
    if (movie.first_air_date) {
      return movie.first_air_date.slice(0,4);
    } else {
      return 'N/A';
    }
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

export const roundRating = (rating) => {
  if (rating.toFixed(0).length === 2) {
    return rating.toFixed(0);
  } else {
    return rating.toFixed(1);
  }
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

export const getCastImage = character => {
  if (character) {
    if (character.profile_path) {
      return `https://image.tmdb.org/t/p/original${character.profile_path}`;
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

export const removeItemFromList = (movies, id) => {
  return movies.reduce((newItemArray, item) => {
    if (item.id !== id) {
      newItemArray.push(item);
    }
    return newItemArray;
  }, [])
}