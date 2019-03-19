import React from 'react';

import '../App.css';
import MovieResult from './MovieResult';
import './style/css/SearchResults.css';

class SearchResults extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.searchQuery)
  }

  render() {
    return (
      <section className="search_page">
        <section className="search_data">
          <h1>Search Results For Query</h1>
        </section>
        <section className="results"><p>Results: 22</p></section>
        {/* <section className="search_filter">
          <input type="text" className="search_bar" placeholder="Search">
          <section className="filter_settings">
            <select name="" id="">
              <option value="">Sort By</option>
            </select>
          </section>
        </section> */}
        <section className="search_results">
          <MovieResult />
          <MovieResult />
          <MovieResult />
          <MovieResult />
          <MovieResult />
          <MovieResult />
        </section>
      </section>
    );
  }
}

export default SearchResults;
