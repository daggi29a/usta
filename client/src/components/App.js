import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home';
import Countries from './Countries';
import AddCountry from './AddCountry';
import Secret from './Secret';
import Login from './Login';
import Signup from './Signup';
import AdminStuff from './AdminStuff';
import Profil from './Profil';
import Veranstaltung from './Veranstaltung';
import api from '../api';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
    api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <br />
        <div className="mittig">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/countries" component={Countries} />
            <Route path="/add-country" component={AddCountry} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/secret" component={Secret} />
            <Route path="/adminstuff" component={AdminStuff} />
            <Route path="/veranstaltung" component={Veranstaltung} />
            <Route path="/profil" component={Profil} />
            <Route render={() => <h2>404</h2>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
