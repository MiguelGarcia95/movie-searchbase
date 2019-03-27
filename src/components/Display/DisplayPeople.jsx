import React from 'react';
import {connect} from 'react-redux';
import {
  fetchPeople, fetchPeopleMovieCredits, fetchPeopleShowCredits, fetchPeopleImages, fetchPeopleTaggedImages
} from '../../actions/peopleActions';
import CastSlider from '../layout/CastSlider';
import {castSliderSettings, movieTvSliderSettings} from '../../utils/settings';
import {fetchShowGenres} from '../../actions/tvShowActions'; 
import {fetchMovieGenres} from '../../actions/movieActions'; 
import ContentSlider from '../layout/ContentSlider';

import './style/css/DisplayPeople.css';

class DisplayPeople extends React.Component {
  componentDidMount() {
    this.fetchPeopleData();
  }

  fetchPeopleData = () => {
    this.props.fetchPeople(this.props.match.params.peopleId);
    this.props.fetchPeopleMovieCredits(this.props.match.params.peopleId);
    this.props.fetchPeopleShowCredits(this.props.match.params.peopleId);
    this.props.fetchPeopleImages(this.props.match.params.peopleId);
    this.props.fetchPeopleTaggedImages(this.props.match.params.peopleId);
  }

  displayMovies = (movies, genres) => {
    if (movies.length > 0) {
      return  <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings} />
    } else {
      return <section className="empty_data"><h2>No Movies</h2></section>
    }
  }

  displayShows = (movies, genres) => {
    if (movies.length > 0) {
      return  <ContentSlider movies={movies} genres={genres} type='shows' settings={movieTvSliderSettings} />
    } else {
      return <section className="empty_data"><h2>No Shows</h2></section>
    }
  }

  displayImages = images => {
    return images.map((image, index) => {
      return <img src={`https://image.tmdb.org/t/p/original/${image.file_path}`} />
    })
  }

  render() {
    const {
      currentPerson, currentPersonMovieCredits, currentPersonShowCredits, currentPersonImages, 
      currentPersonTaggedImages, showGenres, movieGenres
    } = this.props;

    return (
      <section className="display_people">
        {currentPerson && (
          <React.Fragment>
            <section className="display_people_header">
              <section className="people_header_background">
                <section className="top"></section>
                <section className="bottom"></section>
              </section>
              <section className="people_header_content">
                <section className="people_profile_image">
                  <img src={`https://image.tmdb.org/t/p/original/${currentPerson.profile_path}`} alt={currentPerson.name}/>
                </section>
                <section className="header_people_data">
                  <section className="top">
                    <section className="header_people_name">
                      <h2 className="name">{currentPerson.name}</h2>
                    </section>
                    <section className="header_people_details">
                      <section className="dob"><p><span>DOB: </span> {currentPerson.birthday}</p></section>
                      <section className="place_of_birth"><p>{currentPerson.place_of_birth}</p></section>
                      <section className="role"><p>{currentPerson.known_for_department}</p></section>
                      <section className="bio"><p>{currentPerson.biography}</p></section>
                    </section>
                  </section>
                </section>
              </section>
            </section>

            <section className="works">
              <section className="person_movies">
                <h2>Movies</h2>
                {currentPersonMovieCredits && this.displayMovies(currentPersonMovieCredits.cast, movieGenres)}
              </section>
              <section className="person_movies">
                <h2>Shows</h2>
                {currentPersonShowCredits && this.displayShows(currentPersonShowCredits.cast, showGenres)}
              </section>
            </section>
            
            <section className="image_grid">
              <h2>Images</h2>
              {currentPersonImages && this.displayImages(currentPersonImages)}
            </section>
          </React.Fragment>
        )}
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentPerson: state.people.currentPerson,
    currentPersonMovieCredits: state.people.currentPersonMovieCredits,
    currentPersonShowCredits: state.people.currentPersonShowCredits,
    currentPersonImages: state.people.currentPersonImages,
    currentPersonTaggedImages: state.people.currentPersonTaggedImages,
    showGenres: state.shows.showGenres,
    movieGenres: state.movies.movieGenres
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPeople: id => dispatch(fetchPeople(id)),
    fetchPeopleMovieCredits: id => dispatch(fetchPeopleMovieCredits(id)),
    fetchPeopleShowCredits: id => dispatch(fetchPeopleShowCredits(id)),
    fetchPeopleImages: id => dispatch(fetchPeopleImages(id)),
    fetchPeopleTaggedImages: id => dispatch(fetchPeopleTaggedImages(id)),
    fetchShowGenres: () => dispatch(fetchShowGenres()),
    fetchMovieGenres: () => dispatch(fetchMovieGenres())
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(DisplayPeople);