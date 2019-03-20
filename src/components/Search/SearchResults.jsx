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
      if (this.props.type === 'movies') {
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
    return this.props.type === 'movies' ? this.props.moviesSearchResults : this.props.showsSearchResults;
  }

  getGenres = fetchType => fetchType === 'movies' ? this.props.movieGenres : this.props.showGenres;

  isPrevPaginationDisabled = type => {
    let isDisabled = false;
    if (type === 'movies' && this.props.moviesCurrentPage === 1) {
      isDisabled = true;
    } else if (type === 'shows' && this.props.showsCurrentPage === 1) {
      isDisabled = true;
    }
    return isDisabled;
  }

  isNextPaginationDisabled = type => {
    let isDisabled = false;
    if (type === 'movies' && this.props.moviesCurrentPage >= this.props.moviesTotalPages) {
      isDisabled = true;
    } else if (type === 'shows' && this.props.showsCurrentPage >= this.props.showsTotalPages) {
      isDisabled = true;
    }
    return isDisabled;
  }

  updateResults = direction => {
    if (direction === 'next') {
      if (this.props.type === 'movies') {
        this.props.fetchMoviesSearch(this.props.match.params.searchQuery, this.props.moviesCurrentPage + 1);
      } else {
        this.props.fetchShowsSearch(this.props.match.params.searchQuery, this.props.moviesCurrentPage + 1);
      }
    } else {
      if (this.props.type === 'movies') {
        this.props.fetchMoviesSearch(this.props.match.params.searchQuery, this.props.moviesCurrentPage - 1);
      } else {
        this.props.fetchShowsSearch(this.props.match.params.searchQuery, this.props.moviesCurrentPage - 1);
      }
    }
  }

  render() {
    const {type} = this.props;
    const genres = this.getGenres(type);
    const {searchQuery} = this.props.match.params;
    const searchResults = this.getSearchResults();
    const prevPaginationStatus = this.isPrevPaginationDisabled(type);
    const nextPaginationStatus = this.isNextPaginationDisabled(type);
    const prevPaginationStatusClass = prevPaginationStatus ? 'disabled' : '';
    const nextPaginationStatusClass = nextPaginationStatus ? 'disabled' : '';

    return (
      <section className="search_page">
        <section className="search_data">
          <h1>Search Results For: <span>{searchQuery}</span></h1>
          <ResultSwitch />
        </section>
        <section className="results"><p>Results: {searchResults.length}</p></section>
        <section className="search_results">
          {this.displayResults(searchResults, type, genres)}
        </section>
        <section className="pagination">
          <section className='pagination_left' >
            <section className={`pagination_button ${prevPaginationStatusClass}`}>
              {prevPaginationStatus &&  <i className="fas fa-3x fa-arrow-left"></i>}
              {!prevPaginationStatus &&  <i className="fas fa-3x fa-arrow-left" onClick={() => this.updateResults('prev')}></i>}
            </section>
          </section>
          <section className="pagination_page"></section>
          <section className='pagination_right' >
            <section className={`pagination_button ${nextPaginationStatusClass}`}>
              {nextPaginationStatus && <i className="fas fa-3x fa-arrow-right"></i>}
              {!nextPaginationStatus && <i className="fas fa-3x fa-arrow-right" onClick={() => this.updateResults('next')}></i>}
            </section>
          </section>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesSearchResults: state.results.moviesSearchResults,
    moviesCurrentPage: state.results.moviesCurrentPage,
    moviesTotalPages: state.results.moviesTotalPages,
    moviesTotalResults: state.results.moviesTotalResults,
    type: state.settings.type,
    showsSearchResults: state.results.showsSearchResults,
    showsCurrentPage: state.results.showsCurrentPage,
    showsTotalPages: state.results.showsTotalPages,
    showsTotalResults: state.results.showsTotalResults,
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
