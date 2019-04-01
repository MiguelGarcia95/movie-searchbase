import React from 'react';
import {connect} from 'react-redux';
import {NavLink } from 'react-router-dom';
import './style/css/MyFooter.css';

class MyFooter extends React.Component {
  onSearchKeyDown = e => {
    if (e.keyCode === 13 && e.target.value) {
      this.props.history.push(`/search/${e.target.value}`)
    }
  }
  render() {
    const {session_id} = this.props;
    return (
      <footer className="footer">
        <section className="footer_content">
          <section className="footer_nav">
            <NavLink className="nav_icon" to="/"><i className="fa fa-2x fa-home"></i> <span>Home</span></NavLink>
            {session_id && (
              <NavLink className="nav_icon" to="/account"><i className="far fa-2x fa-user-circle"></i> <span>Account</span></NavLink>
            )}
            <input className='navbar_search' type='text' placeholder="Search" onKeyDown={this.onSearchKeyDown} />
          </section>
          <a href='https://www.themoviedb.org/'>
            <img src="https://movie-searchbase.firebaseapp.com/images/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" alt="TMDB Logo" />
          </a>
        </section>
        <section className="footer_meta">
          <a className="nav_icon" id='meta_left' href="mailto:miguel@miguelgarcia.app"><i className="fas fa-envelope-open"></i> <span>miguel@miguelgarcia.app</span></a> 
          <p id='meta_center'>Copyright ©2019 - Created by <a href='https://www.miguelgarcia.app'>Miguel Garcia</a></p> 
          <a className="nav_icon" id='meta_right' href="https://www.miguelgarcia.app"><i className="far fa-window-maximize"></i> <span>miguelgarcia.app</span></a>
        </section>
      </footer>
    );
  }
}

const mapStateToProps = state => {
  return {
    session_id: state.auth.session_id
  }
}

export default connect(mapStateToProps)(MyFooter);
