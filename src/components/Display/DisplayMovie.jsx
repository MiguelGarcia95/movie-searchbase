import React from 'react';
import {connect} from 'react-redux';
import {fetchMovie, fetchMovieCredits, fetchMovieReviews, fetchMovieVideos, fetchSimilarMovies} from '../../actions/movieActions'; 

import './style/css/Display.css';

class DisplayMovie extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
    this.props.fetchMovieCredits(this.props.match.params.movieId);
    this.props.fetchMovieReviews(this.props.match.params.movieId);
    this.props.fetchMovieVideos(this.props.match.params.movieId);
    this.props.fetchSimilarMovies(this.props.match.params.movieId);
  }

  getImage = () => {
    let image = '';
    if (this.props.currentMovie) {
      if (this.props.currentMovie.backdrop_path) {
        image = `https://image.tmdb.org/t/p/original${this.props.currentMovie.backdrop_path}`;
      } else {
        image = '/images/movie/movie_bg.jpeg';
      }
    } else {
      image = '/images/movie/movie_bg.jpeg';
    }
    return image;
  }

  displayCompanies = (companies) => {
    return companies.map(company => {
      return (
        <section key={company.name} title={company.name} className="company">
          <img src={`https://image.tmdb.org/t/p/original${company.logo_path}`} alt={`${company.name} logo`}/>
        </section>
      )
    })
  }

  displayGenres = (genres) => {
    return genres.map(genre => {
      return <span key={genre.id} className="genre">{genre.name}</span>
    })
  }

  displayCast = cast => {
    return cast.map(character => {
      return <section className="cast_character" key={character.cast_id}></section>
    })
  }

  render() {
    const {currentMovie, currentMoviesVideos, currentMoviesCredits, currentMoviesReviews, similarMovies} = this.props;
    const imageStyle = {
      backgroundImage: `url(${this.getImage()})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }
    // console.log(currentMoviesCredits)
    return (
      <section className="display_movie">
        {currentMovie && (
          <React.Fragment>
            <section className="display_movie_header">
              <section className="display_movie_header_image" style={imageStyle}></section>
              <section className="display_movie_header_data">
                <h1 className="title">{currentMovie.title}</h1>
                <p className="meta">{this.displayGenres(currentMovie.genres)}</p>
                <h4 className="description">{currentMovie.overview}</h4>
                <section className="companies">
                  {this.displayCompanies(currentMovie.production_companies)}
                </section>
              </section>
            </section>
            <section className="display_movie_data">
              <section className="display_movie_data_cast">
                {currentMoviesCredits && this.displayCast(currentMoviesCredits.cast)}
              </section>
              <section className="display_movie_data_trailers">
              </section>
              <section className="display_movie_data_reviews">
              </section>
              <section className="display_movie_data_similar">
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
    similarMovies: state.movies.similarMovies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: id => dispatch(fetchMovie(id)),
    fetchMovieCredits: id => dispatch(fetchMovieCredits(id)), 
    fetchMovieReviews: id => dispatch(fetchMovieReviews(id)), 
    fetchMovieVideos: id => dispatch(fetchMovieVideos(id)), 
    fetchSimilarMovies: id => dispatch(fetchSimilarMovies(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMovie);
