// Example of component you can copy/paste to create new components


import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
// import './Sample.css';

class Veranstaltung extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <div className="Veranstaltung">
        <h3> ~Titel der Veranstaltung~ </h3>
        <h4> ~Datum~ ~Laden~ </h4>
        <div>V-Mensch:</div>
        <div>Aufbau:</div>
        <div>Catering:</div>
        <br />
      <table classname="table table-bordered">
        <thead>
          <h4>Kasse</h4>
          <tr>
            <th scope="col">Zeit</th>
            <th scope="col">1</th>
            <th scope="col">2</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Thornton</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br />
      <table classname="table table-bordered">
        <thead>
          <h4>Theke</h4>
          <tr>
            <th scope="col">Zeit</th>
            <th scope="col">1</th>
            <th scope="col">2</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Franz</td>
            <td>Gebhardt</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td></td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td></td>
            <td>Schorsch</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
  }
}

export default Veranstaltung;
