import React from 'react';
import {connect} from 'react-redux';

import './style/css/ResultSwitch.css';
import {setType} from '../../actions/settingsActions';
import Pagination from './Pagination';

const isFetchMovies = fetchType => fetchType === 'movies' ? 'active' : ''; 
const isFetchShows = fetchType => fetchType === 'shows' ? 'active' : ''; 

const ResultSwitch = ({type, setType}) => {
  return (
    <section className="result_switch_container">
      <section className="result_switch">
        <section className={`result_switch_select ${isFetchMovies(type)}`}>
          <p className="result_switch_select_content" onClick={() => setType('movies')}>Movies</p>
          <section className="result_switch_select_color"></section>
        </section>
        <section className={`result_switch_select ${isFetchShows(type)}`}>
          <p className="result_switch_select_content" onClick={() => setType('shows')}>Shows</p>
          <section className="result_switch_select_color"></section>
        </section>
      </section>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    type: state.settings.type
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setType: type => dispatch(setType(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultSwitch);