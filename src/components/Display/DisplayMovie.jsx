import React from 'react';
import {connect} from 'react-redux';
import {fetchMovie} from '../../actions/movieActions'; 

import './style/css/Display.css';

class DisplayMovie extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  render() {
    return (
      <section className="display_movie">
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentMovie: state.movies.currentMovie
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: id => dispatch(fetchMovie(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMovie);
