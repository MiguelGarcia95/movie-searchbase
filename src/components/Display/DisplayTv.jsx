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
    return <CastSlider cast={cast} settings={castSliderSettings} />
  }

  displaySimilarShows = (movies, genres) => {
    return  <ContentSlider movies={movies} genres={genres} type='shows' settings={movieTvSliderSettings} />
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

  // getImage = () => {
  //   let image = '';
  //   if (this.props.currentShow) {
  //     if (this.props.currentShow.backdrop_path) {
  //       image = `https://image.tmdb.org/t/p/original${this.props.currentShow.backdrop_path}`;
  //     } else {
  //       image = '/images/movie/movie_bg.jpeg';
  //     }
  //   } else {
  //     image = '/images/movie/movie_bg.jpeg';
  //   }
  //   return image;
  // }

  // displayCompanies = (companies) => {
  //   return companies.map(company => {
  //     return (
  //       <section key={company.name} title={company.name} className="company">
  //         <img src={`https://image.tmdb.org/t/p/original${company.logo_path}`} alt={`${company.name} logo`}/>
  //       </section>
  //     )
  //   })
  // }

  // displayGenres = (genres) => {
  //   return genres.map(genre => {
  //     return <span key={genre.id} className="genre">{genre.name}</span>
  //   })
  // }

  render() {
    const {currentShow, currentShowCredits, currentShowReviews, similarShows, showGenres} = this.props;

    return (
      <section className="display_movie">
        {currentShow && currentShow.id === Number(this.props.match.params.showId) && (
          <React.Fragment>
            <DisplayHeader currentMovie={currentShow} type='shows' />
            <section className="display_movie_data">
              <section className="display_movie_data_cast">
              </section>
              <section className="display_movie_data_trailers">
              </section>
              <section className="display_movie_data_reviews">
              </section>
              <section className="display_movie_data_similar">
              </section>
            </section>
          </React.Fragment>
        )}
      </section>

        //  <React.Fragment>
        //    <DisplayHeader currentMovie={currentMovie} />
        //    <section className="display_movie_data">
        //      <section className="display_movie_data_cast">
        //        <h2>Cast {currentMoviesCredits && <small>({currentMoviesCredits.cast.slice(0, 20).length})</small>}</h2>
        //        {currentMoviesCredits && this.displayCast(currentMoviesCredits.cast)}
        //      </section>
        //      <section className="display_movie_data_similar">
        //        <h2>Similar Movies  {similarMovies && <small>({similarMovies.length})</small>} </h2>
        //        {similarMovies && movieGenres && this.displaySimilarMovies(similarMovies, movieGenres)}
        //      </section>
        //      <section className="display_movie_data_reviews">
        //        <h2>Reviews  {currentMoviesReviews && <small>({currentMoviesReviews.length})</small>}</h2>
        //        {currentMoviesReviews && this.displayReviews(currentMoviesReviews)}
        //      </section>
        //    </section>
        //  </React.Fragment>
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
