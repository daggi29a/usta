// Example of component you can copy/paste to create new components


import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
// import './Sample.css';

class ShowStuff extends Component {
   constructor(props) {
     super(props)
    }

  showVmensch() {
    if (this.props.state.vmensch === true)
     return <div>V-Mensch:</div>
  }
  showCatering() {
    if (this.props.state.catering === true)
     return <div>Catering:</div>
  }
  showAufbau() {
    if (this.props.state.aufbau === true)
     return <div>Aufbau:</div>
  }
  showSonstiges() {
    if (this.props.state.sonstiges === true)
     return <div>{this.props.state.sonstigesName}</div>
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
