import React from 'react';
import {connect} from 'react-redux';
import {
  fetchPeople, fetchPeopleMovieCredits, fetchPeopleShowCredits, fetchPeopleImages, fetchPeopleTaggedImages
} from '../../actions/peopleActions';
import {
  castSliderSettings, movieTvSliderSettings, movieTvSliderSettings1, movieTvSliderSettings2, movieTvSliderSettings3,
  movieTvSliderSettings4, movieTvSliderSettings5, movieTvSliderSettings6, movieTvSliderSettings7, castSliderSettings1
} from '../../utils/settings';
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
    // if (movies.length > 0) {
    //   return  <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings4} />
    // } else {
    //   return <section className="empty_data"><h2>No Movies</h2></section>
    // }
    switch (movies.length) {
      case 0: 
        return  <section className="empty_data"><h2>No Movies</h2></section>
      case 1:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings1} />
      case 2:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings2} />
      case 3:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings3} />
      case 4:
        return  <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings4} />
      case 5:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings5} /> 
      case 6:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings6} /> 
      case 7:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings7} /> 
      default:
        return <ContentSlider movies={movies} genres={genres} type='movies' settings={movieTvSliderSettings} />
    }
  }

  displayShows = (shows, genres) => {
    switch (shows.length) {
      case 0: 
        return  <section className="empty_data"><h2>No Shows</h2></section>
      case 1:
        return <ContentSlider movies={shows} genres={genres} type='shows' settings={movieTvSliderSettings1} />
      case 2:
        return <ContentSlider movies={shows} genres={genres} type='shows' settings={movieTvSliderSettings2} />
      case 3:
        return <ContentSlider movies={shows} genres={genres} type='shows' settings={movieTvSliderSettings3} />
      case 4:
        return  <ContentSlider movies={shows} genres={genres} type='shows' settings={movieTvSliderSettings4} />
      case 5:
        return <ContentSlider movies={shows} genres={genres} type='shows' settings={movieTvSliderSettings5} /> 
      case 6:
        return <ContentSlider movies={shows} genres={genres} type='shows' settings={movieTvSliderSettings6} /> 
      case 7:
        return <ContentSlider movies={shows} genres={genres} type='shows' settings={movieTvSliderSettings7} /> 
      default:
        return <ContentSlider movies={shows} genres={genres} type='shows' settings={movieTvSliderSettings} />
    }
  }

  displayImages = images => {
    let allImages = this.sortImages(images);
    return (
      <section className="image_grid">
        <section className="grid_col grid_col_one">
          {this.displayColImages(allImages.firstCol)}
        </section>
        <section className="grid_col grid_col_two">
          {this.displayColImages(allImages.secondCol)}
        </section>
        <section className="grid_col grid_col_three">
          {this.displayColImages(allImages.thirdCol)}
        </section>
      </section>
    );
  }

  displayColImages = images => {
    return images.map((image, index) => {
      return <img key={index} src={`https://image.tmdb.org/t/p/original/${image.file_path}`} alt={'actor image'}/>
    })
  }

  sortImages = images => {
    let imageObject = {
      firstCol: [],
      secondCol: [],
      thirdCol: []
    };
    let firstImage = false;
    let secondImage = false;
    images.forEach(image => {
      if (!firstImage && !secondImage) {
        firstImage = true;
        imageObject.firstCol.push(image);
      } else if (firstImage && !secondImage) {
        secondImage = true;
        imageObject.secondCol.push(image);
      } else if (firstImage && secondImage) {
        firstImage = false;
        secondImage = false;
        imageObject.thirdCol.push(image);
      }
    });
    return imageObject;
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
                      <section className="place_of_birth"><p><span>Birth Place: </span> {currentPerson.place_of_birth}</p></section>
                      <section className="bio normal"><p>{currentPerson.biography} </p></section>
                      <section className="bio mobile mobile_one"><p>{currentPerson.biography.substring(0, 1300)} {currentPerson.biography.length > 1300 && '...'}</p></section>
                      <section className="bio mobile mobile_two"><p>{currentPerson.biography.substring(0, 1200)} {currentPerson.biography.length > 1200 && '...'}</p></section>
                      <section className="bio mobile mobile_three"><p>{currentPerson.biography.substring(0, 1030)} {currentPerson.biography.length > 1030 && '...'}</p></section>
                      <section className="bio mobile mobile_four"><p>{currentPerson.biography.substring(0, 900)} {currentPerson.biography.length > 900 && '...'}</p></section>
                      <section className="bio mobile mobile_five"><p>{currentPerson.biography.substring(0, 900)} {currentPerson.biography.length > 900 && '...'}</p></section>
                      <section className="bio mobile mobile_six"><p>{currentPerson.biography.substring(0, 800)} {currentPerson.biography.length > 800 && '...'}</p></section>
                      <section className="bio mobile mobile_seven"><p>{currentPerson.biography.substring(0, 880)} {currentPerson.biography.length > 880 && '...'}</p></section>
                      <section className="bio mobile mobile_eight"><p>{currentPerson.biography.substring(0, 800)} {currentPerson.biography.length > 800 && '...'}</p></section>
                      <section className="bio mobile mobile_nine"><p>{currentPerson.biography.substring(0, 1500)} {currentPerson.biography.length > 1500 && '...'}</p></section>
                      <section className="bio mobile mobile_ten"><p>{currentPerson.biography.substring(0, 1300)} {currentPerson.biography.length > 1300 && '...'}</p></section>
                      <section className="bio mobile mobile_eleven"><p>{currentPerson.biography.substring(0, 1500)} {currentPerson.biography.length > 1500 && '...'}</p></section>
                      <section className="bio mobile mobile_twelve"><p>{currentPerson.biography.substring(0, 1300)} {currentPerson.biography.length > 1300 && '...'}</p></section>
                      <section className="bio mobile mobile_thirteen"><p>{currentPerson.biography.substring(0, 1050)} {currentPerson.biography.length > 1050 && '...'}</p></section>
                      <section className="bio mobile mobile_fourteen"><p>{currentPerson.biography.substring(0, 900)} {currentPerson.biography.length > 900 && '...'}</p></section>
                    </section>
                  </section>
                </section>
              </section>
            </section>

            <section className="works">
              <section className="person_data">
                <h2>Movies</h2>
                <section className="person_slider">
                  {currentPersonMovieCredits && this.displayMovies(currentPersonMovieCredits.cast, movieGenres)}
                </section>
              </section>
              <section className="person_data">
                <h2>Shows</h2>
                <section className="person_slider">
                  {currentPersonShowCredits && this.displayShows(currentPersonShowCredits.cast, showGenres)}
                </section>
              </section>
            </section>
            
            <section className="person_images">
              <h2>Images</h2>
              {currentPersonImages && currentPersonTaggedImages && this.displayImages([...currentPersonImages, ...currentPersonTaggedImages])}
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