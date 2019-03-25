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
      <section className="display_people"></section>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentPerson: state.people.currentPerson
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPeople: id => dispatch(fetchPeople(id))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(DisplayPeople);