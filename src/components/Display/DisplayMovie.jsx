import React from 'react';
import {connect} from 'react-redux';
import DisplayHeader from './DisplayHeader';
import CastSlider from '../layout/CastSlider';
import ContentSlider from '../layout/ContentSlider';
import {fetchMovie, fetchMovieCredits, fetchMovieReviews, fetchMovieVideos, fetchSimilarMovies, fetchMovieGenres} from '../../actions/movieActions'; 
import {castSliderSettings, movieTvSliderSettings} from '../../utils/settings';
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
    this.props.fetchMovieVideos(this.props.match.params.movieId);
    this.props.fetchSimilarMovies(this.props.match.params.movieId);
  }

  displayCast = cast => {
    return <CastSlider cast={cast} settings={castSliderSettings} />
  }

  displaySimilarMovies = (movies, genres) => {
    return  <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings} />
  }

  displayReviews = reviews => {
    if (reviews.length > 0) {
      return reviews.map(review => {
        return (
          <section key={review.id} className="review">
            <section className="review_username"><p>{review.author}</p></section>
            <section className="review_content"><p>{review.content}</p></section>
          </section>
        )
      })
    } else {
      return <section className='no_reviews'><h2>No Reviews ...</h2></section>
    }
  }

  render() {
    const {currentMovie, currentMoviesVideos, currentMoviesCredits, currentMoviesReviews, similarMovies, movieGenres} = this.props;

    return (
      <section className="display_movie">
        {currentMovie && currentMovie.id === Number(this.props.match.params.movieId) && (
          <React.Fragment>
            <DisplayHeader currentMovie={currentMovie} />
            <section className="display_movie_data">
              <section className="display_movie_data_cast">
                <h2>Cast <small>{currentMoviesCredits.cast.length}</small></h2>
                {currentMoviesCredits && this.displayCast(currentMoviesCredits.cast)}
              </section>
              <section className="display_movie_data_trailers">
                <h2>Trailers</h2>
              </section>
              <section className="display_movie_data_similar">
                <h2>Similar Movies  <small>{similarMovies.length}</small></h2>
                {similarMovies && movieGenres && this.displaySimilarMovies(similarMovies, movieGenres)}
              </section>
              <section className="display_movie_data_reviews">
                <h2>Reviews  <small>{currentMoviesReviews.length}</small></h2>
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
    currentMoviesVideos: state.movies.currentMoviesVideos,
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
    fetchMovieVideos: id => dispatch(fetchMovieVideos(id)), 
    fetchSimilarMovies: id => dispatch(fetchSimilarMovies(id)),
    fetchMovieGenres: () => dispatch(fetchMovieGenres())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMovie);
