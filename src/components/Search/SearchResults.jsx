import React from 'react';

import '../App.css';
import './style/css/SearchResults.css';

class SearchResults extends React.Component {
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
          <section className="search_result">
            <section className="search_result_movie">
              <section className="search_result_movie_image"></section>
              <p className="search_result_movie_rating">5.0</p>  
            </section>
            <section className="search_result_movie_data">
                <section className="search_result_movie_meta"><p>2015 / Genre</p></section>  
                <section className="search_result_movie_title"><p>Movie Title</p></section>  
            </section>
          </section>
          <section className="search_result">
            <section className="search_result_movie">
              <section className="search_result_movie_image"></section>
              <p className="search_result_movie_rating">5.0</p>  
            </section>
            <section className="search_result_movie_data">
                <section className="search_result_movie_meta"><p>2015 / Genre</p></section>  
                <section className="search_result_movie_title"><p>Movie Title</p></section>  
            </section>
          </section>
          <section className="search_result">
            <section className="search_result_movie">
              <section className="search_result_movie_image"></section>
              <p className="search_result_movie_rating">5.0</p>  
            </section>
            <section className="search_result_movie_data">
                <section className="search_result_movie_meta"><p>2015 / Genre</p></section>  
                <section className="search_result_movie_title"><p>Movie Title</p></section>  
            </section>
          </section>
          <section className="search_result">
            <section className="search_result_movie">
              <section className="search_result_movie_image"></section>
              <p className="search_result_movie_rating">5.0</p>  
            </section>
            <section className="search_result_movie_data">
                <section className="search_result_movie_meta"><p>2015 / Genre</p></section>  
                <section className="search_result_movie_title"><p>Movie Title</p></section>  
            </section>
          </section>
          <section className="search_result">
            <section className="search_result_movie">
              <section className="search_result_movie_image"></section>
              <p className="search_result_movie_rating">5.0</p>  
            </section>
            <section className="search_result_movie_data">
                <section className="search_result_movie_meta"><p>2015 / Genre</p></section>  
                <section className="search_result_movie_title"><p>Movie Title</p></section>  
            </section>
          </section>
          <section className="search_result">
            <section className="search_result_movie">
              <section className="search_result_movie_image"></section>
              <p className="search_result_movie_rating">5.0</p>  
            </section>
            <section className="search_result_movie_data">
                <section className="search_result_movie_meta"><p>2015 / Genre</p></section>  
                <section className="search_result_movie_title"><p>Movie Title</p></section>  
            </section>
          </section>
          <section className="search_result">
            <section className="search_result_movie">
              <section className="search_result_movie_image"></section>
              <p className="search_result_movie_rating">5.0</p>  
            </section>
            <section className="search_result_movie_data">
                <section className="search_result_movie_meta"><p>2015 / Genre</p></section>  
                <section className="search_result_movie_title"><p>Movie Title</p></section>  
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default SearchResults;
