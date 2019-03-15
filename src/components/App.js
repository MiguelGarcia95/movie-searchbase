import React from 'react';
import {connect} from 'react-redux';

import HomeDisplay from './Home/HomeDisplay';
import HomeContent from './Home/HomeContent';
import {fetchNowPlayingMovies, fetchTopRatedMovies, fetchPopularMovies, fetchUpcomingMovies} from '../actions/movieActions';
import {fetchNowPlayingShows, fetchTopRatedShows, fetchPopularShows} from '../actions/tvShowActions';

import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class App extends React.Component {
  state = {
    fetchType: 'movies'
  }

  componentDidMount() {
    this.props.fetchNowPlayingMovies();
    this.props.fetchUpcomingMovies();
    this.props.fetchTopRatedMovies();
    this.props.fetchPopularMovies();
  }

  setFetchType = type => this.setState({fetchType: type});

  render() {
    const {fetchType} = this.state;
    return (
      <section className="App">
        <HomeDisplay  />
        <HomeContent fetchType={fetchType} setFetchType={this.setFetchType}/>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    topRatedMovies: state.movies.topRatedMovies,
    topRatedShows: state.shows.topRatedShows,
    onTheAirShows: state.shows.onTheAirShows,
    popularTvShows: state.shows.popularTvShows
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNowPlayingMovies: () => dispatch(fetchNowPlayingMovies()),
    fetchTopRatedMovies: () => dispatch(fetchTopRatedMovies()),
    fetchPopularMovies: () => dispatch(fetchPopularMovies()),
    fetchUpcomingMovies: () => dispatch(fetchUpcomingMovies()),
    fetchNowPlayingShows: () => dispatch(fetchNowPlayingShows()),
    fetchTopRatedShows: () => dispatch(fetchTopRatedShows()),
    fetchPopularShows: () => dispatch(fetchPopularShows())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
