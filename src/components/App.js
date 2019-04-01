import React from 'react';
import {connect} from 'react-redux';

import HomeDisplay from './Home/HomeDisplay';
import HomeContent from './Home/HomeContent';
import {fetchNowPlayingMovies, fetchTopRatedMovies, fetchPopularMovies, fetchUpcomingMovies, fetchMovieGenres} from '../actions/movieActions';
import {fetchOnTheAirShows, fetchTopRatedShows, fetchPopularShows, fetchOnTheAirTodayShows, fetchShowGenres} from '../actions/tvShowActions';

import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class App extends React.Component {
  state = {
    fetchType: 'movies'
  }

  componentDidMount() {
    if (this.shouldComponentFetchMovies()) {
      this.props.fetchTopRatedMovies();
      this.props.fetchNowPlayingMovies();
      this.props.fetchUpcomingMovies();
      this.props.fetchPopularMovies();
      this.props.fetchMovieGenres();
    }
    this.scrollToTop();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.shouldComponentFetchShows(this.props.type, prevProps.type, this.props.topRatedShows)) {
      this.props.fetchTopRatedShows();
      this.props.fetchOnTheAirShows();
      this.props.fetchPopularShows();
      this.props.fetchOnTheAirTodayShows();
      this.props.fetchShowGenres();
    }
  }

  shouldComponentFetchShows = (newType, oldType, showArray) => {
    return newType !== oldType && newType === 'shows' && showArray.length === 0;
  }

  shouldComponentFetchMovies = () => {
    if ( 
      this.props.topRatedMovies.length === 0 || this.props.nowPlayingMovies.length === 0 || this.props.upcomingMovies.length === 0 || 
      this.props.popularMovies.length === 0 || this.props.movieGenres.length === 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  scrollToTop = () => {
    this.pageTop.scrollIntoView({behavior: 'smooth'});
  }

  homeDisplayMovies = fetchType => fetchType === 'movies' ? this.props.topRatedMovies : this.props.topRatedShows;

  getGenres = fetchType => fetchType === 'movies' ? this.props.movieGenres : this.props.showGenres;

  getContentMovies = (fetchType) => {
    let movies = [];
    if (fetchType === 'movies') {
      movies = [
        {type: fetchType, title: 'Now Playing', movies: this.props.nowPlayingMovies},
        {type: fetchType, title: 'Popular', movies: this.props.popularMovies},
        {type: fetchType, title: 'Upcoming', movies: this.props.upcomingMovies}
      ]
    } else {
      movies = [
        {type: fetchType, title: 'On The Air Today', movies: this.props.onTheAirTodayShows},
        {type: fetchType, title: 'On The Air', movies: this.props.onTheAirShows},
        {type: fetchType, title: 'Popular', movies: this.props.popularShows}
      ]
    }
    return movies;
  }

  render() {
    const {type} = this.props;
    const displayMovies = this.homeDisplayMovies(type);
    const contentMovies = this.getContentMovies(type);
    const genres = this.getGenres(type);
    return (
      <section className="App">
        <div ref={node => this.pageTop = node}></div>
        <HomeDisplay movies={displayMovies} genres={genres} fetchType={type} />
        <HomeContent movies={contentMovies} genres={genres}/>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    topRatedMovies: state.movies.topRatedMovies,
    popularMovies: state.movies.popularMovies,
    upcomingMovies: state.movies.upcomingMovies,
    nowPlayingMovies: state.movies.nowPlayingMovies,
    movieGenres: state.movies.movieGenres,
    topRatedShows: state.shows.topRatedShows,
    onTheAirShows: state.shows.onTheAirShows,
    onTheAirTodayShows: state.shows.onTheAirTodayShows,
    popularShows: state.shows.popularShows,
    showGenres: state.shows.showGenres,
    type: state.settings.type
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNowPlayingMovies: () => dispatch(fetchNowPlayingMovies()),
    fetchTopRatedMovies: () => dispatch(fetchTopRatedMovies()),
    fetchPopularMovies: () => dispatch(fetchPopularMovies()),
    fetchUpcomingMovies: () => dispatch(fetchUpcomingMovies()),
    fetchOnTheAirShows: () => dispatch(fetchOnTheAirShows()),
    fetchTopRatedShows: () => dispatch(fetchTopRatedShows()),
    fetchPopularShows: () => dispatch(fetchPopularShows()),
    fetchOnTheAirTodayShows: () => dispatch(fetchOnTheAirTodayShows()),
    fetchMovieGenres: () => dispatch(fetchMovieGenres()),
    fetchShowGenres: () => dispatch(fetchShowGenres())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
