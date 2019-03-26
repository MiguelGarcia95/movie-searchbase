import React from 'react';
import {connect} from 'react-redux';
import DisplayHeader from './DisplayHeader';
import CastSlider from '../layout/CastSlider';
import ContentSlider from '../layout/ContentSlider';
import {fetchShow, fetchShowCredits, fetchShowReviews, fetchSimilarShows, fetchShowGenres} from '../../actions/tvShowActions'; 
import {castSliderSettings, movieTvSliderSettings} from '../../utils/settings';
import './style/css/Display.css';

class DisplayTv extends React.Component {
  componentDidMount() {
    this.props.fetchShowGenres()
    this.fetchShowData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.showId !== prevProps.match.params.showId) {
      this.fetchShowData();
    }
  }

  fetchShowData = () => {
    this.props.fetchShow(this.props.match.params.showId);
    this.props.fetchShowCredits(this.props.match.params.showId);
    this.props.fetchShowReviews(this.props.match.params.showId);
    this.props.fetchSimilarShows(this.props.match.params.showId);
  }

  displayCast = cast => {
    if (cast.length > 0) {
      return <CastSlider cast={cast} settings={castSliderSettings} />
    } else {
      return <section className="empty_data"><h2>No Cast Available</h2></section>
    }
  }

  displaySimilarShows = (movies, genres) => {
    if (movies.length > 0) {
      return  <ContentSlider movies={movies} genres={genres} type='shows' settings={movieTvSliderSettings} />
    } else {
      return <section className="empty_data"><h2>No Similar Shows</h2></section>
    }
  }

  displayReviews = reviews => {
    if (reviews.length > 0) {
      return reviews.map(review => {
        return (
          <section key={review.id} className="review">
            <section className="review_username"><p><span>From: </span> <a href={review.url}>{review.author}</a></p></section>
            <section className="review_content"><p>{review.content}</p></section>
          </section>
        )
      })
    } else {
      return <section className='no_reviews'><h2>No Reviews ...</h2></section>
    }
  }

  render() {
    const {currentShow, currentShowCredits, currentShowReviews, similarShows, showGenres} = this.props;

    return (
      <section className="display_movie">
        {currentShow && currentShow.id === Number(this.props.match.params.showId) && (
          <React.Fragment>
            <DisplayHeader currentMovie={currentShow} type='shows' />
            <section className="display_movie_data">
              <section className="display_movie_data_cast">
                <h2>Cast {currentShowCredits && <small>({currentShowCredits.cast.slice(0, 20).length})</small>}</h2>
                {currentShowCredits && this.displayCast(currentShowCredits.cast)}
              </section>
              <section className="display_movie_data_similar">
                <h2>Similar Shows  {similarShows && <small>({similarShows.length})</small>} </h2>
                {similarShows && showGenres && this.displaySimilarShows(similarShows, showGenres)}
              </section>
              <section className="display_movie_data_reviews">
                <h2>Reviews  {currentShowReviews && <small>({currentShowReviews.length})</small>}</h2>
                {currentShowReviews && this.displayReviews(currentShowReviews)}
              </section>
            </section>
          </React.Fragment>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentShow: state.shows.currentShow,
    currentShowCredits: state.shows.currentShowCredits,
    currentShowReviews: state.shows.currentShowReviews,
    similarShows: state.shows.similarShows,
    showGenres: state.shows.showGenres
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchShow: id => dispatch(fetchShow(id)),
    fetchShowCredits: id => dispatch(fetchShowCredits(id)),
    fetchShowReviews: id => dispatch(fetchShowReviews(id)),
    fetchSimilarShows: id => dispatch(fetchSimilarShows(id)),
    fetchShowGenres: () => dispatch(fetchShowGenres())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTv);
