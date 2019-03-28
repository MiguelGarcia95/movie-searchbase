import React from 'react';
import {connect} from 'react-redux';
import DisplayHeader from './DisplayHeader';
import CastSlider from '../layout/CastSlider';
import ContentSlider from '../layout/ContentSlider';
import {fetchMovie, fetchMovieCredits, fetchMovieReviews, fetchSimilarMovies, fetchMovieGenres} from '../../actions/movieActions'; 
import {
  castSliderSettings, movieTvSliderSettings, movieTvSliderSettings1, movieTvSliderSettings2, movieTvSliderSettings3,
  movieTvSliderSettings4, movieTvSliderSettings5, movieTvSliderSettings6, movieTvSliderSettings7, castSliderSettings1
} from '../../utils/settings';

import './style/css/Display.css';

class DisplayMovie extends React.Component {
  componentDidMount() {
    this.fetchMovieData();
    this.props.fetchMovieGenres();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.movieId !== prevProps.match.params.movieId) {
      this.fetchMovieData();
    }
  }

  fetchMovieData = () => {
    this.props.fetchMovie(this.props.match.params.movieId);
    this.props.fetchMovieCredits(this.props.match.params.movieId);
    this.props.fetchMovieReviews(this.props.match.params.movieId);
    this.props.fetchSimilarMovies(this.props.match.params.movieId);
  }

  displayCast = cast => {
    switch (cast.length) {
      case 0: 
        return <section className="empty_data"><h2>No Cast Available</h2></section>
      case 1:
        return <CastSlider cast={cast} settings={castSliderSettings1} />
      default:
        return <CastSlider cast={cast} settings={castSliderSettings} />
    }
  }


  displaySimilarMovies = (movies, genres) => {
    switch (movies.length) {
      case 0: 
        return  <section className="empty_data"><h2>No Similar Movies</h2></section>
      case 1:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings1} />
      case 2:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings2} />
      case 3:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings3} />
      case 4:
        return  <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings4} />
      case 5:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings5} /> 
      case 6:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings6} /> 
      case 7:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings7} /> 
      default:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings} />
    }
  }

  displayReviews = reviews => {
    if (reviews.length > 0) {
      return reviews.map(review => {
        return (
          <section key={review.id} className="review">
            <section className="review_username"><p><span>From: </span> <a href={review.url}>{review.author}</a></p></section>
            <section className="review_content"><p>{review.content}</p></section>
          </section>
        )
      })
    } else {
      return <section className='no_reviews'><h2>No Reviews ...</h2></section>
    }
  }

  render() {
    const {currentMovie, currentMoviesCredits, currentMoviesReviews, similarMovies, movieGenres} = this.props;

    return (
      <section className="display_movie">
        {currentMovie && currentMovie.id === Number(this.props.match.params.movieId) && (
          <React.Fragment>
            <DisplayHeader currentMovie={currentMovie} type='movies' />
            <section className="display_movie_data">
              <section className="display_movie_data_cast">
                <h2>Cast {currentMoviesCredits && <small>({currentMoviesCredits.cast.slice(0, 20).length})</small>}</h2>
                {currentMoviesCredits && this.displayCast(currentMoviesCredits.cast)}
              </section>
              <section className="display_movie_data_similar">
                <h2>Similar Movies  {similarMovies && <small>({similarMovies.length})</small>} </h2>
                {similarMovies && movieGenres && this.displaySimilarMovies(similarMovies, movieGenres)}
              </section>
              <section className="display_movie_data_reviews">
                <h2>Reviews  {currentMoviesReviews && <small>({currentMoviesReviews.length})</small>}</h2>
                {currentMoviesReviews && this.displayReviews(currentMoviesReviews)}
              </section>
            </section>
          </React.Fragment>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentMovie: state.movies.currentMovie,
    currentMoviesCredits: state.movies.currentMoviesCredits,
    currentMoviesReviews: state.movies.currentMoviesReviews,
    similarMovies: state.movies.similarMovies,
    movieGenres: state.movies.movieGenres
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: id => dispatch(fetchMovie(id)),
    fetchMovieCredits: id => dispatch(fetchMovieCredits(id)), 
    fetchMovieReviews: id => dispatch(fetchMovieReviews(id)), 
    fetchSimilarMovies: id => dispatch(fetchSimilarMovies(id)),
    fetchMovieGenres: () => dispatch(fetchMovieGenres())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMovie);
