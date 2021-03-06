// Example of component you can copy/paste to create new components


import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
// import './Sample.css';

class ShowKasse extends Component {

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
       <th scope="col" key={"firstColKasse" + (i + 1)}>{i+1}</th>
     )
   }
     return col;
 }
 showRowKasse() {
   let row = [];
   console.log(this.props.state);
   for (let j = 0; j < this.props.state.kasseAnzahl; j++ ) {
     row.push(
         <tr key={"kasseRow" + (j + 1) }>
           <th scope="row">{this.props.state.zeitenKasse[j]}</th>
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
       <td key={"colKasse" + (i + 1)}></td>
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
