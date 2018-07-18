// Example of component you can copy/paste to create new components


import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
// import './Sample.css';

class ShowTheke extends Component {
   constructor(props) {
     super(props)
  }

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
       <th scope="col">{i+1}</th>
     )
   }
     return col;
 }
 showRowTheke() {
   let row = [];
   for (let j = 0; j < this.props.state.thekeAnzahl; j++ ) {
     row.push(
         <tr>
           <th scope="row">{j+1}</th>
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
       <td>{i+1}</td>
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
