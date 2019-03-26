import React from 'react';
import {connect} from 'react-redux';
import {fetchPeople} from '../../actions/peopleActions';

class DisplayPeople extends React.Component {
  componentDidMount() {
    this.props.fetchPeople(this.props.match.params.peopleId)
  }

  render() {
    const {currentPerson} = this.props;
    console.log(currentPerson)
    return (
      <section className="display_people">
        <section className="display_people_header">
          <section className="display_people_image">
            <section className="display_image"></section>
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
    fetchPeople: id => dispatch(fetchPeople(id))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(DisplayPeople);