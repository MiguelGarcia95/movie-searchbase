import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';
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
      // <Navbar  dark expand="md" style={{position: 'fixed', width: '100%', backgroundColor: '#232323'}}>
      //   <NavbarBrand tag={RRNavLink} to='/'>Movie-SB</NavbarBrand>
      //   <NavbarToggler onClick={this.toggle} />
      //   <Collapse isOpen={this.state.isOpen} navbar>
      //     <Nav className="ml-auto" navbar>
      //       <NavItem>
      //         {session_id && <NavLink tag={RRNavLink} to='/account'>Account</NavLink>}
      //         {!session_id && <NavLink tag={RRNavLink} to='/login'>Login</NavLink>}
      //       </NavItem>
      //       {session_id && (
      //         <NavItem>
      //           <NavLink style={{cursor: 'pointer'}} onClick={() => this.onLogoutClick()} >Logout</NavLink>
      //         </NavItem>
      //       )}
      //       <NavItem>
      //         <NavLink tag={RRNavLink} to='/random'>Random</NavLink>
      //       </NavItem>
      //     </Nav>
      //   </Collapse>
      // </Navbar>
      <nav class='navbar'>
        <section class="navbar_brand">
          <a class="navbar_link" href="/theme">Movie SearchBase</a>
          <input class='navbar_search' type='text' placeholder="Search" />
        </section>
        <section class='navbar_links'>
          <a class="nav_icon" title='Search' href="/theme/search.html"><i class="fas fa-2x fa-search"></i></a>
          <a class="nav_icon" title='Random' href="/theme"><i class="fas fa-2x fa-random"></i></a>
          {session_id && (
            <React.Fragment>
              <a class="nav_icon" title="Account" href="/theme/account.html"><i class="far fa-2x fa-user-circle"></i></a>
              <a class="nav_icon" title='Signout' href="/theme"><i class="fas fa-2x fa-sign-out-alt"></i></a>
              <a class="navbar_link signout" href="/theme">Sign Out</a>
            </React.Fragment>
          )}
          {!session_id && (
            <React.Fragment>
              <a class="navbar_link signin" href="/theme">Sign In</a>
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
