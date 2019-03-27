import React from 'react';
import {connect} from 'react-redux';
import {
  fetchPeople, fetchPeopleCredits, fetchPeopleMovieCredits, fetchPeopleShowCredits, fetchPeopleImages, fetchPeopleTaggedImages
} from '../../actions/peopleActions';

import './style/css/DisplayPeople.css';

class DisplayPeople extends React.Component {
  componentDidMount() {
    // this.props.fetchPeople(this.props.match.params.peopleId);
    this.fetchPeopleData();
  }

  fetchPeopleData = () => {
    this.props.fetchPeople(this.props.match.params.peopleId);
    // this.props.fetchPeopleCredits(this.props.match.params.peopleId);
    this.props.fetchPeopleMovieCredits(this.props.match.params.peopleId);
    this.props.fetchPeopleShowCredits(this.props.match.params.peopleId);
    this.props.fetchPeopleImages(this.props.match.params.peopleId);
    this.props.fetchPeopleTaggedImages(this.props.match.params.peopleId);
  }

  render() {
    const {currentPerson} = this.props;
    // const imageProfile = {
    //   backgroundImage: `https://image.tmdb.org/t/p/original/${currentPerson.profile_path}`
    // }
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
                      <section className="dob"></section>
                      <section className="place_of_birth"></section>
                      <section className="role"></section>
                    </section>
                  </section>
                  <section className="bottom">
                    <section className="header_people_details">
                      <section className="dob"></section>
                      <section className="place_of_birth"></section>
                      <section className="role"></section>
                    </section>
                  </section>
                </section>
              </section>

              <section className='display_people_description'>
                <p className='bio'>data here</p>
              </section>

            </section>
            <section className="works">

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
    // currentPersonCredits: state.people.currentPersonCredits,
    currentPersonImages: state.people.currentPersonImages,
    currentPersonTaggedImages: state.people.currentPersonTaggedImages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPeople: id => dispatch(fetchPeople(id)),
    // fetchPeopleCredits: id => dispatch(fetchPeopleCredits(id)),
    fetchPeopleMovieCredits: id => dispatch(fetchPeopleMovieCredits(id)),
    fetchPeopleShowCredits: id => dispatch(fetchPeopleShowCredits(id)),
    fetchPeopleImages: id => dispatch(fetchPeopleImages(id)),
    fetchPeopleTaggedImages: id => dispatch(fetchPeopleTaggedImages(id))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(DisplayPeople);