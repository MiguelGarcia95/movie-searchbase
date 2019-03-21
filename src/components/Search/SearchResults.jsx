import React from 'react';
import {connect} from 'react-redux';

import {fetchMoviesSearch, fetchShowsSearch} from '../../actions/searchActions';
import {fetchMovieGenres} from '../../actions/movieActions';
import {fetchShowGenres} from '../../actions/tvShowActions';
import MovieResult from './MovieResult';
import ResultSwitch from './ResultSwitch';
import HomeSwitch from '../Home/HomeSwitch';
import '../App.css';
import './style/css/SearchResults.css';
import Pagination from './Pagination';

class SearchResults extends React.Component {
  componentDidMount() {
    if (this.props.type === 'movies') {
      this.fetchMovies(1);
    } else {
      this.fetchShows(1);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.type !== prevProps.type && this.props.type === 'shows' && this.props.showsSearchResults.length === 0) {
      this.fetchShows(1);
    } else if (this.props.match.params.searchQuery !== prevProps.match.params.searchQuery) {
      if (this.isTypeMovie()) {
        this.fetchMovies(1);
      } else {
        this.fetchShows(1);
      }
    }
  }

  fetchMovies = page => {
    this.props.fetchMoviesSearch(this.props.match.params.searchQuery, page);
    this.props.fetchMovieGenres();
  }

  fetchShows = page => {
    this.props.fetchShowsSearch(this.props.match.params.searchQuery, page);
    this.props.fetchShowGenres();
  }

  displayResults = (movies, type, genres) => {
    return movies.map(movie => {
      return <MovieResult key={movie.id} movie={movie} type={type} genres={genres}/>
    })
  }

  getSearchResults = () => {
    return this.isTypeMovie() ? this.props.moviesSearchResults : this.props.showsSearchResults;
  }

  getGenres = () => this.isTypeMovie() ? this.props.movieGenres : this.props.showGenres;

  isTypeMovie = () => this.props.type === 'movies' ? true : false;

  isDisabledClass = status => status ? 'disabled' : '';

  render() {
    const {type} = this.props;
    const genres = this.getGenres(type);
    const searchResults = this.getSearchResults();

    return (
      <section className="search_page">
        <section className="search_data">
          <h1>Search Results For: <span>{this.props.match.params.searchQuery}</span></h1>
          <ResultSwitch />
        </section>
        <section className="results"><p>Results: {searchResults.length}</p></section>
        <section className="search_results">
          {this.displayResults(searchResults, type, genres)}
        </section>

        <Pagination searchQuery={this.props.match.params.searchQuery} />

      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    type: state.settings.type,
    moviesSearchResults: state.results.moviesSearchResults,
    showsSearchResults: state.results.showsSearchResults,
    movieGenres: state.movies.movieGenres,
    showGenres: state.shows.showGenres
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMoviesSearch: (searchQuery, page) => dispatch(fetchMoviesSearch(searchQuery, page)),
    fetchShowsSearch: (searchQuery, page) => dispatch(fetchShowsSearch(searchQuery, page)),
    fetchMovieGenres: () => dispatch(fetchMovieGenres()),
    fetchShowGenres: () => dispatch(fetchShowGenres())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
