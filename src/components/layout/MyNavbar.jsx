import React from 'react';
// import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setSession, logout} from '../../actions/authActions';
import './css/MyNavbar.css';

class MyNavbar extends React.Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    if (localStorage.getItem('session_id')) {
      this.props.setSession(localStorage.getItem('session_id'));
    }
  }
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLogoutClick = () => {
    this.props.logout();
  }

  render() {
    const {session_id} = this.props;
    return (
      <nav class='navbar'>
        <section class="navbar_brand">
          <NavLink class="navbar_link" to="/">Movie SearchBase</NavLink>
          <input class='navbar_search' type='text' placeholder="Search" />
        </section>
        <section class='navbar_links'>
          <NavLink class="nav_icon" title='Search' to="/search"><i class="fas fa-2x fa-search"></i></NavLink>
          <NavLink class="nav_icon" title='Random' to="/random"><i class="fas fa-2x fa-random"></i></NavLink>
          {session_id && (
            <React.Fragment>
              <NavLink class="nav_icon" title="Account" to="/account"><i class="far fa-2x fa-user-circle"></i></NavLink>
              <NavLink class="navbar_link signout" to="/">Sign Out</NavLink>
            </React.Fragment>
          )}
          {!session_id && (
            <React.Fragment>
              <NavLink class="navbar_link signin" to="/login">Sign In</NavLink>
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
