// Example of component you can copy/paste to create new components


import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
// import './Sample.css';

class ShowKasse extends Component {
   constructor(props) {
     super(props)
  }

  showHeaderKasse() {
    if (this.props.state.kasseAnzahl > 0)
    return (
      <div>
        <h4>Kasse</h4>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Zeit</th>
            {this.showColKasse()}
          </tr>
        </thead>
        <tbody>
         {this.showRowKasse()}
        </tbody>
       </table>
    </div>
  )
 }
 showColKasse() {
   let col = [];
   for (let i = 0; i < this.props.state.leuteProKasse; i++ ) {
     col.push(
       <th scope="col">{i+1}</th>
     )
   }
     return col;
 }
 showRowKasse() {
   let row = [];
   for (let j = 0; j < this.props.state.kasseAnzahl; j++ ) {
     row.push(
         <tr>
           <th scope="row">{j+1}</th>
           {this.showColKasse2()}
         </tr>
     )
   }
   return row;
 }
 showColKasse2() {
   let col = [];
   for (let i = 0; i < this.props.state.leuteProKasse; i++ ) {
     col.push(
       <td>{i+1}</td>
     )
   }
     return col;
 }
  render() {
    return (
      <div>
      {this.showHeaderKasse()}
      </div>
    );
  }
}

export default ShowKasse;
