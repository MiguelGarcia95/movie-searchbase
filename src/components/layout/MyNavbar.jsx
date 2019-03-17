import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setSession, logout} from '../../actions/authActions';
import './style/css/MyNavbar.css';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
    isMobile: false
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

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onWindowResize = () => {
    if (this.navbar.clientWidth < 750 && !this.state.isMobile) {
      this.setState({isMobile: true})
    } else if (this.navbar.clientWidth >= 750 && this.state.isMobile) {
      this.setState({isMobile: false})
    }
  }

  onLogoutClick = () => {
    this.props.logout();
  }

  render() {
    const {session_id} = this.props;
    const {isMobile} = this.state;
    return (
      <nav className='navbar' ref={ node => this.navbar = node }>
        <section className="navbar_brand">
          {isMobile ? <NavLink className="navbar_link" to="/">M SB</NavLink> : <NavLink className="navbar_link" to="/">Movie SearchBase</NavLink>}
          <input className='navbar_search' type='text' placeholder="Search" />
        </section>
        <section className='navbar_links'>
          {/* <NavLink className="nav_icon" title='Search' to="/search"><i className="fas fa-2x fa-search"></i></NavLink> */}
          {/* <NavLink className="nav_icon" title='Random' to="/random"><i className="fas fa-2x fa-random"></i></NavLink> */}
          {session_id && (
            <React.Fragment>
              <NavLink className="nav_icon" title="Account" to="/account"><i className="far fa-2x fa-user-circle"></i></NavLink>
              <NavLink className="navbar_link signout" to="" onClick={() => this.onLogoutClick()} >Sign Out</NavLink>
            </React.Fragment>
          )}
          {!session_id && (
            <React.Fragment>
              <NavLink className="navbar_link signin" to="/login">Sign In</NavLink>
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
