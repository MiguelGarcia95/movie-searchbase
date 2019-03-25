import React from 'react';
import {connect} from 'react-redux';
import {fetchPeople} from '../../actions/peopleActions';

class DisplayPeople extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.peopleId);
    this.props.fetchPeople(this.props.match.params.peopleId)
  }

  render() {
    return (
      <section className="display_people"></section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPeople: id => dispatch(fetchPeople(id))
  }
}
 
export default connect(null, mapDispatchToProps)(DisplayPeople);