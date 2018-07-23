import React from 'react';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import "./Navbar.css";



export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand tag={Link} to="/">UstA e.V.</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/veranstaltung/liste">Veranstaltungen</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/neues">Neues</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/dateien">Dateien</NavLink>
              </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/adminstuff">Admin</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  </DropdownToggle>
                <DropdownMenu className="lala" right>
                  <DropdownItem >
                    <NavLink className="dropItem" tag={Link} to="/profil" className="lala">Profil</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="lala">
                    <NavLink tag={Link} to="/logout" className="lala">Logout</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
