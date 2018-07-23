// Example of component you can copy/paste to create new components


import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
// import './Sample.css';
import { Button } from 'reactstrap';

class ShowStuff extends Component {

  showVmensch() {
    if (this.props.state.vmensch === true)
     return <div>V-Mensch: <Button color="secondary" size="sm">eintragen</Button>{' '}</div>
  }
  showCatering() {
    if (this.props.state.catering === true)
     return <div>Catering: <Button color="secondary" size="sm">eintragen</Button>{' '}</div>
  }
  showAufbau() {
    if (this.props.state.aufbau === true)
     return <div>Aufbau: <Button color="secondary" size="sm">eintragen</Button>{' '}</div>
  }
  showSonstiges() {
    if (this.props.state.sonstiges === true)
     return <div>{this.props.state.sonstigesName} <Button color="secondary" size="sm">eintragen</Button>{' '}</div>
  }
  render() {
    return (
      <div>
      {this.showVmensch()}
      {this.showAufbau()}
      {this.showCatering()}
      {this.showSonstiges()}
      </div>
    );
  }
}

export default ShowStuff;
