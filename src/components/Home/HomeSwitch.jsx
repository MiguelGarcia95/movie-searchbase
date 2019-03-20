import React from 'react';
import {connect} from 'react-redux';
import {setType} from '../../actions/settingsActions';
import './style/css/HomeSwitch.css';

const isFetchMovies = fetchType => fetchType === 'movies' ? 'active' : ''; 
const isFetchShows = fetchType => fetchType === 'shows' ? 'active' : ''; 

const HomeSwitch = ({type, setType}) => {
  return (
    <section className="home_switch_container">
      <section className="home_switch">
        <section className={`home_switch_select ${isFetchMovies(type)}`}>
          <p className="home_switch_select_content" onClick={() => setType('movies')}>Movies</p>
          <section className="home_switch_select_color"></section>
        </section>
        <section className={`home_switch_select ${isFetchShows(type)}`}>
          <p className="home_switch_select_content" onClick={() => setType('shows')}>Shows</p>
          <section className="home_switch_select_color"></section>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeSwitch);