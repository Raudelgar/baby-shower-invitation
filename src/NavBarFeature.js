import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavBarFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <Router>
        <Navbar color="indigo" dark expand="md" scrolling>
          <NavbarBrand href="/">
            <strong>NavBar</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick = {this.onClick}/>}
          <Collapse isOpen = {this.state.collapse} navbar>
            <NavbarNav center>
              <NavItem active>
                <NavLink to="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Details</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">RSVP</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}

export default NavBarFeature;