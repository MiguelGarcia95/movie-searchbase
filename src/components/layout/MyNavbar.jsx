import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/authActions';

class MyNavbar extends React.Component {
  state = {
    isOpen: false
  };
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md" style={{position: 'fixed', width: '100%'}}>
        <NavbarBrand tag={RRNavLink} to='/'>Movie-SB</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to='/account'>Acount</NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink tag={RRNavLink} to='/login'>Login</NavLink> */}
              <NavLink onClick={() => this.props.login()}>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/random'>Random</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login())
  }
}

export default connect(null, mapDispatchToProps)(MyNavbar);
