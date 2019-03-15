import React from 'react';
import {connect} from 'react-redux';

import HomeDisplay from './Home/HomeDisplay';
import HomeContent from './Home/HomeContent';
import {fetchNowPlayingMovies, fetchLatestMovies, fetchPopularMovies, fetchUpcomingMovies} from '../actions/movieActions';

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
    this.props.fetchLatestMovies();
    this.props.fetchPopularMovies();
  }

  setFetchType = type => this.setState({fetchType: type});

  render() {
    return (
      <section className="App">
        <HomeDisplay />
        <HomeContent />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    popularMovies: state.movies.popularMovies,
    upcomingMovies: state.movies.upcomingMovies,
    latestsMovies: state.movies.latestsMovies,
    nowPlayingMovies: state.movies.nowPlayingMovies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNowPlayingMovies: () => dispatch(fetchNowPlayingMovies()),
    fetchLatestMovies: () => dispatch(fetchLatestMovies()),
    fetchPopularMovies: () => dispatch(fetchPopularMovies()),
    fetchUpcomingMovies: () => dispatch(fetchUpcomingMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
