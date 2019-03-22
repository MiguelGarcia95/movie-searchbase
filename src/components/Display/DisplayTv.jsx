import React from 'react';
import {connect} from 'react-redux';
import {fetchShow} from '../../actions/tvShowActions'; 
import './style/css/Display.css';

class DisplayTv extends React.Component {
  compoenntDidMount() {
    this.props.fetchShow(this.props.match.params.showId);
  }

  render() {
    return (
      <section className="display_movie">
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentShow: state.shows.currentShow
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchShow: id => dispatch(fetchShow(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTv);
