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
import checkInvite from './checkInvite';
import VeranstaltungListe from './VeranstaltungListe';
import VeranstaltungDetail from './VeranstaltungDetail';
import Favicon from 'react-favicon';
import api from '../api';
import logo from '../test.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
    api.loadUser();
  }
  componentWillMount() {
    document.title = 'UstA e.V.'
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
      <Favicon url={logo} />
        <header className="App-header">
          <Navbar />
        </header>
        <br />
        <div className="mittig">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/secret" component={Secret} />
            <Route path="/adminstuff" component={AdminStuff} />
            <Route path="/veranstaltung/erstellen" component={Veranstaltung} />
            <Route path="/profil" component={Profil} />
            <Route path="/check/:id" component={checkInvite} />
            <Route path="/signup" component={Signup} />
            <Route path="/veranstaltung/liste" component={VeranstaltungListe} />
            <Route path="/veranstaltung/:id" component={VeranstaltungDetail} />
            <Route render={() => <h2>404</h2>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
