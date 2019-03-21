import React from 'react';
import './style/css/Pagination.css';

const Pagination = () => {
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

export default Pagination;