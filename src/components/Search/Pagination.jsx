import React from 'react';
import {connect} from 'react-redux';

import './style/css/Pagination.css';

class Pagination extends React.Component {
  isTypeMovie = () => this.props.type === 'movies' ? true : false;

  isDisabledClass = status => status ? 'disabled' : '';

  getLastPage = () => this.isTypeMovie() ? this.props.moviesTotalPages : this.props.showsTotalPages;
  getCurrentPage = () => this.isTypeMovie() ? this.props.moviesCurrentPage : this.props.showsCurrentPage;

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
    let moviePage = this.updatePage(this.props.moviesCurrentPage, direction);
    let showPage = this.updatePage(this.props.showsCurrentPage, direction)

    if (this.isTypeMovie()) {
      this.props.fetchMoviesSearch(this.props.match.params.searchQuery, moviePage);
    } else {
      this.props.fetchShowsSearch(this.props.match.params.searchQuery, showPage);
    }
  }

  updatePage = (currentPage, direction) => direction === 'prev' ? currentPage - 1 : currentPage + 1; 

  render() {
    return (
      <section className="pagination">
        <section className='pagination_left' >
          <section className={`pagination_button ${prevPaginationStatusClass}`}>
            {prevPaginationStatus &&  <i className="fas fa-3x fa-arrow-left"></i>}
            {!prevPaginationStatus &&  <i className="fas fa-3x fa-arrow-left" onClick={() => this.updateResults('prev')}></i>}
          </section>
        </section>
        <section className="pagination_center">
          <section className="first_page page"><p onClick={() => this.goToPage(1)}>1</p></section>
          <section className="last_page page"><p onClick={() => this.goToPage(this.getLastPage())} >{this.getLastPage()}</p></section>
          <section className="current_page page"><p>{this.getCurrentPage()}</p></section>
        </section>
        <section className='pagination_right' >
          <section className={`pagination_button ${nextPaginationStatusClass}`}>
            {nextPaginationStatus && <i className="fas fa-3x fa-arrow-right"></i>}
            {!nextPaginationStatus && <i className="fas fa-3x fa-arrow-right" onClick={() => this.updateResults('next')}></i>}
          </section>
        </section>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    moviesCurrentPage: state.results.moviesCurrentPage,
    moviesTotalPages: state.results.moviesTotalPages,
    moviesTotalResults: state.results.moviesTotalResults,
    type: state.settings.type,
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

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);