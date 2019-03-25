import React from 'react';
import {connect} from 'react-redux';
import DisplayHeader from './DisplayHeader';
import CastSlider from '../layout/CastSlider';
import ContentSlider from '../layout/ContentSlider';
import {fetchShow, fetchShowCredits, fetchShowReviews, fetchSimilarShows} from '../../actions/tvShowActions'; 
import {castSliderSettings, movieTvSliderSettings} from '../../utils/settings';
import './style/css/Display.css';

class DisplayTv extends React.Component {
  componentDidMount() {
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

  displayCompanies = (companies) => {
    return companies.map(company => {
      return (
        <section key={company.name} title={company.name} className="company">
          <img src={`https://image.tmdb.org/t/p/original${company.logo_path}`} alt={`${company.name} logo`}/>
        </section>
      )
    })
  }

  displayGenres = (genres) => {
    return genres.map(genre => {
      return <span key={genre.id} className="genre">{genre.name}</span>
    })
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
          <React.Fragment>
            <section className="display_movie_header">
              <section className="display_movie_header_image" style={imageStyle}></section>
              <section className="display_movie_header_data">
                <h1 className="title">{currentShow.original_name}</h1>
                <p className="meta">{this.displayGenres(currentShow.genres)}</p>
                <h4 className="description">{currentShow.overview}</h4>
                <section className="companies">
                  {this.displayCompanies(currentShow.networks)}
                </section>
              </section>
            </section>
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
    );
  }
}

const mapStateToProps = state => {
  return {
    currentShow: state.shows.currentShow,
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
    fetchSimilarShows: id => dispatch(fetchSimilarShows(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTv);
