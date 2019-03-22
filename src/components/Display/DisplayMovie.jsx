import React from 'react';
import {connect} from 'react-redux';
import {fetchMovie} from '../../actions/movieActions'; 

import './style/css/Display.css';

class DisplayMovie extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  getImage = () => {
    let image = '';
    if (this.props.currentMovie) {
      if (this.props.currentMovie.backdrop_path) {
        image = `https://image.tmdb.org/t/p/original${this.props.currentMovie.backdrop_path}`;
      } else {
        image = '/images/movie/movie_bg.jpeg';
      }
    } else {
      image = '/images/movie/movie_bg.jpeg';
    }
    return image;
  }

  render() {
    const {currentMovie} = this.props;
    const imageStyle = {
      backgroundImage: `url(${this.getImage()})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }
    return (
      <section className="display_movie">
        {currentMovie && (
          <section className="display_movie_header">
            <section className="display_movie_header_image" style={imageStyle}></section>
            <section className="display_movie_header_data">
              <h1 className="title">{currentMovie.original_name}</h1>
              <p className="meta">Genre genre genre </p>
              <h4 className="description">{currentMovie.overview}</h4>
              <section className="button">Trailer</section>
            </section>
          </section>
        )}
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
