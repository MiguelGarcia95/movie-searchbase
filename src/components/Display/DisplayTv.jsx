import React from 'react';
import {connect} from 'react-redux';
import {fetchShow} from '../../actions/tvShowActions'; 

import './style/css/Display.css';

class DisplayTv extends React.Component {
  componentDidMount() {
    this.props.fetchShow(this.props.match.params.showId);
  }

  render() {
    console.log(this.props.currentShow);
    return (
      <section className="display_movie">
        <section className="display_movie_header">
          <section className="display_movie_header_image"></section>
          <section className="display_movie_header_data">
            <h1 className="title">Title Here</h1>
            <p className="meta">Genre genre genre </p>
            <h4 className="description">Description goes here</h4>
            <section className="button">Trailer</section>
          </section>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentShow: state.shows.currentShow
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchShow: id => dispatch(fetchShow(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTv);
