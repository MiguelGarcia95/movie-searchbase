import React from 'react';
import {connect} from 'react-redux';

import {fetchSearchResults} from '../../actions/searchActions';
import MovieResult from './MovieResult';
import '../App.css';
import './style/css/SearchResults.css';

class SearchResults extends React.Component {
  componentDidMount() {
    this.props.fetchSearchResults(this.props.match.params.searchQuery, 1);
  }

  displayResults = movies => {
    return movies.map(movie => {
      return <MovieResult key={movie.id} movie={movie} />
    })
  }

  render() {
    const {searchResults} = this.props;
    const {searchQuery} = this.props.match.params;

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
          {this.displayResults(searchResults)}
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.results.searchResults,
    currentPage: state.results.currentPage,
    totalPages: state.results.totalPages,
    totalResults: state.results.totalResults,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchResults: (searchQuery, page) => dispatch(fetchSearchResults(searchQuery, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
