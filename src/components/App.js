import React from 'react';
import {connect} from 'react-redux';

import HomeDisplay from './Home/HomeDisplay';
import HomeContent from './Home/HomeContent';
import {fetchNowPlayingMovies, fetchTopRatedMovies, fetchPopularMovies, fetchUpcomingMovies} from '../actions/movieActions';
import {fetchOnTheAirShows, fetchTopRatedShows, fetchPopularShows, fetchOnTheAirTodayShows} from '../actions/tvShowActions';

import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class App extends React.Component {
  state = {
    fetchType: 'movies'
  }

  componentDidMount() {
    this.props.fetchTopRatedMovies();
    this.props.fetchNowPlayingMovies();
    this.props.fetchUpcomingMovies();
    this.props.fetchPopularMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.shouldComponentFetchShows(this.state.fetchType, prevState.fetchType, this.props.topRatedShows)) {
      this.props.fetchTopRatedShows();
      this.props.fetchOnTheAirShows();
      this.props.fetchPopularShows();
      this.props.fetchOnTheAirTodayShows();
    }
  }

  shouldComponentFetchShows = (newType, oldType, showArray) => {
    return newType !== oldType && newType === 'shows' && showArray.length === 0;
  }

  homeDisplayMovies = fetchType => fetchType === 'movies' ? this.props.topRatedMovies : this.props.topRatedShows;

  setFetchType = type => this.setState({fetchType: type});

  getContentMovies = (fetchType) => {
    let movies = [];
    if (fetchType === 'movies') {
      movies = [
        {title: 'Now Playing', movies: this.props.nowPlayingMovies},
        {title: 'Popular', movies: this.props.popularMovies},
        {title: 'Upcoming', movies: this.props.upcomingMovies}
      ]
    } else {
      movies = [
        {title: 'On The Air Today', movies: this.props.onTheAirTodayShows},
        {title: 'On The Air', movies: this.props.onTheAirShows},
        {title: 'Popular', movies: this.props.popularShows}
      ]
    }
    return movies;
  }

  render() {
    const {fetchType} = this.state;
    const displayMovies = this.homeDisplayMovies(fetchType);
    const contentMovies = this.getContentMovies(fetchType);
    return (
      <section className="App">
        <HomeDisplay movies={displayMovies} />
        <HomeContent fetchType={fetchType} setFetchType={this.setFetchType} movies={contentMovies}/>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    topRatedMovies: state.movies.topRatedMovies,
    topRatedShows: state.shows.topRatedShows,
    popularMovies: state.movies.popularMovies,
    upcomingMovies: state.movies.upcomingMovies,
    nowPlayingMovies: state.movies.nowPlayingMovies,
    onTheAirShows: state.shows.onTheAirShows,
    onTheAirTodayShows: state.shows.onTheAirTodayShows,
    popularShows: state.shows.popularShows
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
    fetchOnTheAirTodayShows: () => dispatch(fetchOnTheAirTodayShows())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
