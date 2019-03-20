import React from 'react';
import {connect} from 'react-redux';

import {fetchMoviesSearch, fetchShowsSearch} from '../../actions/searchActions';
import MovieResult from './MovieResult';
import '../App.css';
import './style/css/SearchResults.css';

class SearchResults extends React.Component {
  componentDidMount() {
    if (this.props.type === 'movies') {
      this.props.fetchMoviesSearch(this.props.match.params.searchQuery, 1);
    } else {
      this.props.fetchShowsSearch(this.props.match.params.searchQuery, 1);
    }
  }

  displayResults = (movies, type) => {
    return movies.map(movie => {
      return <MovieResult key={movie.id} movie={movie} type={type} />
    })
  }

  getSearchResults = () => {
    return this.props.type === 'movies' ? this.props.moviesSearchResults : this.props.showsSearchResults;
  }

  render() {
    const {searchQuery} = this.props.match.params;
    const searchResults = this.getSearchResults();
    const {type} = this.props;

    return (
      <section className="search_page">
        <section className="search_data">
          <h1>Search Results For: <span>{searchQuery}</span></h1>
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
          {this.displayResults(searchResults, type)}
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
    showsTotalResults: state.results.showsTotalResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMoviesSearch: (searchQuery, page) => dispatch(fetchMoviesSearch(searchQuery, page)),
    fetchShowsSearch: (searchQuery, page) => dispatch(fetchShowsSearch(searchQuery, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
