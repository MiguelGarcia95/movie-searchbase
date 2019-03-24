import React from 'react';
import {connect} from 'react-redux';

import CastSlider from '../layout/CastSlider';
import ContentSlider from '../layout/ContentSlider';
import {fetchMovie, fetchMovieCredits, fetchMovieReviews, fetchMovieVideos, fetchSimilarMovies, fetchMovieGenres} from '../../actions/movieActions'; 

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
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };

    return <CastSlider cast={cast} settings={settings} />
  }

  displaySimilarMovies = (movies, genres) => {
    const settings = {
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
          breakpoint: 1100,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 620,
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

    return  <ContentSlider movies={movies} genres={genres} type='movies' settings={settings} />
  }

  render() {
    const {currentMovie, currentMoviesVideos, currentMoviesCredits, currentMoviesReviews, similarMovies, movieGenres} = this.props;
    const imageStyle = {
      backgroundImage: `url(${this.getImage()})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    };

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
                <h2>Cast</h2>
                {currentMoviesCredits && this.displayCast(currentMoviesCredits.cast)}
              </section>
              <section className="display_movie_data_trailers">
                <h2>Trailers</h2>
              </section>
              <section className="display_movie_data_similar">
                <h2>Similar Movies</h2>
                {similarMovies && movieGenres && this.displaySimilarMovies(similarMovies, movieGenres)}
              </section>
              <section className="display_movie_data_reviews">
                <h2>Reviews</h2>
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
