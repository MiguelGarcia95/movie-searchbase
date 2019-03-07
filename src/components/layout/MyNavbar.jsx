import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';

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
              <NavLink tag={RRNavLink} to='/login'>Login</NavLink>
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

export default MyNavbar;
