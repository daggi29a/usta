// Example of component you can copy/paste to create new components


import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
// import './Sample.css';
import { Button } from 'reactstrap';

class ShowTheke extends Component {

  showHeaderTheke() {
    if (this.props.state.thekeAnzahl > 0)
    return (
      <div>
        <h4>Theke</h4>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Zeit</th>
            {this.showColTheke()}
          </tr>
        </thead>
        <tbody>
         {this.showRowTheke()}
        </tbody>
       </table>
    </div>
  )
 }
 showColTheke() {
   let col = [];
   for (let i = 0; i < this.props.state.leuteProSchicht; i++ ) {
     col.push(
       <th scope="col" key={"firstColTheke" + (i + 1)}>{i+1}</th>
     )
   }
     return col;
 }
 showRowTheke() {
   let row = [];
   for (let j = 0; j < this.props.state.thekeAnzahl; j++ ) {
     row.push(
         <tr key={"thekeRow" + (j + 1)} >
           <th scope="row">{this.props.state.zeitenSchicht[j]}</th>
           {this.showColTheke2()}
         </tr>
     )
   }
   return row;
 }
 showColTheke2() {
   let col = [];
   for (let i = 0; i < this.props.state.leuteProSchicht; i++ ) {
     col.push(
       <td key={"colTheke" + (i + 1)}></td>
     )
   }
     return col;
 }
  render() {
    return (
      <div>
      {this.showHeaderTheke()}
      </div>
    );
  }
}

export default ShowTheke;
