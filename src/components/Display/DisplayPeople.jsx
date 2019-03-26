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
    this.props.fetchPeopleCredits(this.props.match.params.peopleId);
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
              <section className="display_people_image">
                <section className="display_image">
                  <section className="display_image_bg">
                    <img src={`https://image.tmdb.org/t/p/original/${currentPerson.profile_path}`} alt={currentPerson.name}/>
                  </section>
                </section>
              </section>
              <section className="display_people_data">
                <section className="meta">
                  <h1 className='display_people_name'>Name</h1>
                  <p className='display_people_description'>data here</p>
                </section>
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
    currentPersonCredits: state.people.currentPersonCredits,
    currentPersonImages: state.people.currentPersonImages,
    currentPersonTaggedImages: state.people.currentPersonTaggedImages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPeople: id => dispatch(fetchPeople(id)),
    fetchPeopleCredits: id => dispatch(fetchPeopleCredits(id)),
    fetchPeopleMovieCredits: id => dispatch(fetchPeopleMovieCredits(id)),
    fetchPeopleShowCredits: id => dispatch(fetchPeopleShowCredits(id)),
    fetchPeopleImages: id => dispatch(fetchPeopleImages(id)),
    fetchPeopleTaggedImages: id => dispatch(fetchPeopleTaggedImages(id))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(DisplayPeople);