import React from 'react';
import {connect} from 'react-redux';
import DisplayHeader from './DisplayHeader';
import CastSlider from '../layout/CastSlider';
import ContentSlider from '../layout/ContentSlider';
import {fetchShow, fetchShowCredits, fetchShowReviews, fetchSimilarShows, fetchShowGenres} from '../../actions/tvShowActions'; 
import {deleteMessage} from '../../actions/accountActions'; 
import {
  castSliderSettings, movieTvSliderSettings, movieTvSliderSettings1, movieTvSliderSettings2, movieTvSliderSettings3,
  movieTvSliderSettings4, movieTvSliderSettings5, movieTvSliderSettings6, movieTvSliderSettings7, castSliderSettings1
} from '../../utils/settings';
import './style/css/Display.css';

class DisplayTv extends React.Component {
  state = {
    displayMessage: false
  };

  componentDidMount() {
    this.props.fetchShowGenres()
    this.fetchShowData();
    this.scrollToTop();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.showId !== prevProps.match.params.showId) {
      this.fetchShowData();
    }

    if (this.props.message !== prevProps.message && this.props.message) {
      this.setState({displayMessage: true});
      setTimeout( () => {
        this.setState({displayMessage: false})
        this.props.deleteMessage();
      }, 5000);
    }
  }

  fetchShowData = () => {
    this.props.fetchShow(this.props.match.params.showId);
    this.props.fetchShowCredits(this.props.match.params.showId);
    this.props.fetchShowReviews(this.props.match.params.showId);
    this.props.fetchSimilarShows(this.props.match.params.showId);
  }

  scrollToTop = () => {
    this.pageTop.scrollIntoView({behavior: 'smooth'});
  }

  displayCast = cast => {
    switch (cast.length) {
      case 0: 
        return <section className="empty_data"><h2>No Cast Available</h2></section>
      case 1:
        return <CastSlider cast={cast} settings={castSliderSettings1} />
      default:
        return <CastSlider cast={cast} settings={castSliderSettings} />
    }
  }

  displaySimilarShows = (movies, genres) => {
    switch (movies.length) {
      case 0: 
        return  <section className="empty_data"><h2>No Similar Shows</h2></section>
      case 1:
        return <ContentSlider movies={movies} genres={genres} type='shows' settings={movieTvSliderSettings1} />
      case 2:
        return <ContentSlider movies={movies} genres={genres} type='shows' settings={movieTvSliderSettings2} />
      case 3:
        return <ContentSlider movies={movies} genres={genres} type='shows' settings={movieTvSliderSettings3} />
      case 4:
        return  <ContentSlider movies={movies} genres={genres} type='shows' settings={movieTvSliderSettings4} />
      case 5:
        return <ContentSlider movies={movies} genres={genres} type='shows' settings={movieTvSliderSettings5} /> 
      case 6:
        return <ContentSlider movies={movies} genres={genres} type='shows' settings={movieTvSliderSettings6} /> 
      case 7:
        return <ContentSlider movies={movies} genres={genres} type='shows' settings={movieTvSliderSettings7} /> 
      default:
        return <ContentSlider movies={movies} genres={genres} type='shows' settings={movieTvSliderSettings} />
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
    const {currentShow, currentShowCredits, currentShowReviews, similarShows, showGenres, message} = this.props;
    const {displayMessage} = this.state;

    return (
      <section className="display_movie">
        <div ref={node => this.pageTop = node}></div>
        {currentShow && currentShow.id === Number(this.props.match.params.showId) && (
          <React.Fragment>
            <section className={`message_popup ${displayMessage ? 'active' : ''}`}>
              {message && <h2 className="message">{message}</h2> }
            </section>
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
    showGenres: state.shows.showGenres,
    message: state.account.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchShow: id => dispatch(fetchShow(id)),
    fetchShowCredits: id => dispatch(fetchShowCredits(id)),
    fetchShowReviews: id => dispatch(fetchShowReviews(id)),
    fetchSimilarShows: id => dispatch(fetchSimilarShows(id)),
    fetchShowGenres: () => dispatch(fetchShowGenres()),
    deleteMessage: () => dispatch(deleteMessage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTv);
