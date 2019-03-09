import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setSession, logout} from '../../actions/authActions';


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
      <Navbar color="dark" dark expand="md" style={{position: 'fixed', width: '100%'}}>
        <NavbarBrand tag={RRNavLink} to='/'>Movie-SB</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              {session_id && <NavLink tag={RRNavLink} to='/account'>Account</NavLink>}
              {!session_id && <NavLink tag={RRNavLink} to='/login'>Login</NavLink>}
            </NavItem>
            {session_id && (
              <NavItem>
                <NavLink style={{cursor: 'pointer'}} onClick={() => this.onLogoutClick()} >Logout</NavLink>
              </NavItem>
            )}
            <NavItem>
              <NavLink tag={RRNavLink} to='/random'>Random</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
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
