import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Secret from "./Secret";
import Login from "./Login";
import Signup from "./Signup";
import AdminStuff from "./AdminStuff";
import Profil from "./Profil";
import Veranstaltung from "./Veranstaltung";
import checkInvite from "./checkInvite";
import VeranstaltungListe from "./VeranstaltungListe";
import VeranstaltungDetail from "./VeranstaltungDetail";
import Favicon from "react-favicon";
import api from "../api";
import logo from "../test.png";
import "./App.css";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            api.isLoggedIn() === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
        api.loadUser();
    }
    componentWillMount() {
        document.title = "UstA e.V.";
    }

    render() {
        return (
            <div className="App">
                <Favicon url={logo} />
                <header className="App-header">
                    <Navbar />
                </header>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/adminstuff" component={AdminStuff} />
                    <PrivateRoute
                        path="/veranstaltung/erstellen"
                        component={Veranstaltung}
                    />
                    <PrivateRoute path="/profil" component={Profil} />
                    <Route path="/check/:id" component={checkInvite} />
                    <Route path="/signup" component={Signup} />
                    <PrivateRoute
                        path="/veranstaltung/liste"
                        component={VeranstaltungListe}
                    />
                    <PrivateRoute
                        path="/veranstaltung/:id"
                        component={VeranstaltungDetail}
                    />
                    <Route render={() => <h2>404</h2>} />
                </Switch>
            </div>
        );
    }
}

export default App;
