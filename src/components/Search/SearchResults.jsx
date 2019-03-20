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
      this.props.fetchMoviesSearch(this.props.match.params.searchQuery, 1);
      this.props.fetchMovieGenres();
    } else {
      this.props.fetchShowsSearch(this.props.match.params.searchQuery, 1);
      this.props.fetchShowGenres();
    }
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

  render() {
    const {searchQuery} = this.props.match.params;
    const searchResults = this.getSearchResults();
    const {type} = this.props;
    const genres = this.getGenres(type);

    return (
      <section className="search_page">
        <section className="search_data">
          <h1>Search Results For: <span>{searchQuery}</span></h1>
          <ResultSwitch />
        </section>
        <section className="results"><p>Results: {searchResults.length}</p></section>
        {/* <section className="search_filter">
          <input type="text" className="search_bar" placeholder="Search">
          <section className="filter_settings">
            <select name="" id="">
              <option value="">Sort By</option>
            </select>
          </section>
        </section> */}
        <section className="search_results">
          {this.displayResults(searchResults, type, genres)}
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
