import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setSession, logout} from '../../actions/authActions';
import './style/css/MyNavbar.css';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
    isMobile: false,
    searchQuery: ''
  };

  componentDidMount() {
    this.onWindowResize();
    if (localStorage.getItem('session_id')) {
      this.props.setSession(localStorage.getItem('session_id'));
    }
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = () => {
    if (this.navbar.clientWidth < 780 && !this.state.isMobile) {
      this.setState({isMobile: true})
    } else if (this.navbar.clientWidth >= 780 && this.state.isMobile) {
      this.setState({isMobile: false})
    }
  }

  onSearchKeyDown = e => {
    if (e.keyCode === 13 && e.target.value) {
      this.props.history.push(`/search/${e.target.value}`)
    }
  }

  onLogoutClick = () => this.props.logout();

  navbarClass = (isMobile) => isMobile ? 'mobile' : '';

  render() {
    const {session_id} = this.props;
    const {isMobile} = this.state;
    return (
      <nav className={`navbar ${this.navbarClass(isMobile)}`} ref={ node => this.navbar = node }>
        <section className="navbar_brand">
          {isMobile ? <NavLink className="navbar_link" to="/">M SB</NavLink> : <NavLink className="navbar_link" to="/">Movie SearchBase</NavLink>}
          <input className='navbar_search' type='text' placeholder="Search" onKeyDown={this.onSearchKeyDown} />
        </section>
        <section className='navbar_links'>
          {session_id && isMobile && (
            <React.Fragment>
              <NavLink className="nav_icon" title="Account" to="/account"><i className="far fa-2x fa-user-circle"></i></NavLink>
              <NavLink className="navbar_link signout" title="Sign Out" to="" onClick={() => this.onLogoutClick()} ><i className="fas fa-sign-out-alt"></i></NavLink>
            </React.Fragment>
          )}

          {session_id && !isMobile && (
            <React.Fragment>
              <NavLink className="nav_icon" title="Account" to="/account"><i className="far fa-2x fa-user-circle"></i></NavLink>
              <NavLink className="navbar_link signout" title="Sign Out" to="" onClick={() => this.onLogoutClick()} >Sign Out</NavLink>
            </React.Fragment>
          )}
          
          {!session_id && isMobile && (
            <React.Fragment>
              <NavLink className="navbar_link signin" title="Sign In" to="/login"><i className="fas fa-sign-in-alt"></i></NavLink>
            </React.Fragment>
          )}

          {!session_id && !isMobile && (
            <React.Fragment>
              <NavLink className="navbar_link signin" title="Sign In" to="/login">Sign In</NavLink>
            </React.Fragment>
          )}
        </section>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    session_id: state.auth.session_id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSession: session_id => dispatch(setSession(session_id)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar);
