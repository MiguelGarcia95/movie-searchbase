import React from 'react';
import {connect} from 'react-redux';
import {fetchShow, fetchShowCredits, fetchShowReviews, fetchShowVideos, fetchSimilarShows} from '../../actions/tvShowActions'; 

import './style/css/Display.css';

class DisplayTv extends React.Component {
  componentDidMount() {
    this.props.fetchShow(this.props.match.params.showId);
    this.props.fetchShowCredits(this.props.match.params.showId);
    this.props.fetchShowReviews(this.props.match.params.showId);
    this.props.fetchShowVideos(this.props.match.params.showId);
    this.props.fetchSimilarShows(this.props.match.params.showId);
  }

  getImage = () => {
    let image = '';
    if (this.props.currentShow) {
      if (this.props.currentShow.backdrop_path) {
        image = `https://image.tmdb.org/t/p/original${this.props.currentShow.backdrop_path}`;
      } else {
        image = '/images/movie/movie_bg.jpeg';
      }
    } else {
      image = '/images/movie/movie_bg.jpeg';
    }
    return image;
  }

  render() {
    const {currentShow} = this.props;
    const imageStyle = {
      backgroundImage: `url(${this.getImage()})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }
    return (
      <section className="display_movie">
        {currentShow && (
          <section className="display_movie_header">
            <section className="display_movie_header_image" style={imageStyle}></section>
            <section className="display_movie_header_data">
              <h1 className="title">{currentShow.original_name}</h1>
              <p className="meta">Genre genre genre </p>
              <h4 className="description">{currentShow.overview}</h4>
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
    currentShow: state.shows.currentShow,
    currentShowVideos: state.shows.currentShowVideos,
    currentShowCredits: state.shows.currentShowCredits,
    currentShowReviews: state.shows.currentShowReviews,
    similarShows: state.shows.similarShows
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchShow: id => dispatch(fetchShow(id)),
    fetchShowCredits: id => dispatch(fetchShowCredits(id)),
    fetchShowReviews: id => dispatch(fetchShowReviews(id)),
    fetchShowVideos: id => dispatch(fetchShowVideos(id)),
    fetchSimilarShows: id => dispatch(fetchSimilarShows(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTv);
