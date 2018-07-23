import React from "react";
import { Link } from "react-router-dom";
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
    DropdownItem
} from "reactstrap";
import "./Navbar.css";
import api from "../api";

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

    handleLogoutClick(e) {
        api.logout();
    }

    render() {
        const name = api.getUserShortName();
        console.log(name);

        return (
            <div>
                <Navbar color="primary" dark expand="md">
                    <NavbarBrand tag={Link} to="/">
                        UstA e.V.
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {api.isLoggedIn() && (
                                <NavItem>
                                    <NavLink
                                        tag={Link}
                                        to="/veranstaltung/liste"
                                    >
                                        Veranstaltungen
                                    </NavLink>
                                </NavItem>
                            )}
                            {api.isLoggedIn() && (
                                <NavItem>
                                    <NavLink tag={Link} to="/neues">
                                        Neues
                                    </NavLink>
                                </NavItem>
                            )}
                            {api.isLoggedIn() && (
                                <NavItem>
                                    <NavLink tag={Link} to="/dateien">
                                        Dateien
                                    </NavLink>
                                </NavItem>
                            )}
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            {api.isLoggedIn() && (
                                <NavItem>
                                    <NavLink tag={Link} to="/adminstuff">
                                        Admin
                                    </NavLink>
                                </NavItem>
                            )}
                            {api.isLoggedIn() && (
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        {name}
                                    </DropdownToggle>
                                    <DropdownMenu className="lala" right>
                                        <DropdownItem>
                                            <NavLink
                                                className="dropItem"
                                                tag={Link}
                                                to="/profil"
                                            >
                                                Profil
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem className="lala">
                                            <NavLink
                                                tag={Link}
                                                to="/"
                                                onClick={e =>
                                                    this.handleLogoutClick(e)
                                                }
                                            >
                                                Logout
                                            </NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            )}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
