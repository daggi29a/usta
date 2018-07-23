// Example of component you can copy/paste to create new components


import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
// import './Sample.css';
import { Button } from 'reactstrap';

class ShowSonstiges extends Component {

  showHeaderSonstiges() {
    if (this.props.state.sonstigesAnzahl > 0)
    return (
      <div>
        <h4>{this.props.state.sonstigesNameSchicht}</h4>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Zeit</th>
            {this.showColSonstiges()}
          </tr>
        </thead>
        <tbody>
         {this.showRowSonstiges()}
        </tbody>
       </table>
    </div>
  )
 }
 showColSonstiges() {
   let col = [];
   for (let i = 0; i < this.props.state.leuteProSonstiges; i++ ) {
     col.push(
       <th scope="col" key={"firstColSonstiges" + (i + 1)}>{i+1}</th>
     )
   }
     return col;
 }
 showRowSonstiges() {
   let row = [];
   for (let j = 0; j < this.props.state.sonstigesAnzahl; j++ ) {
     row.push(
         <tr key={"sonstigesRow" + (j + 1)} >
           <th scope="row">{this.props.state.zeitenSonstiges[j]}</th>
           {this.showColSonstiges2()}
         </tr>
     )
   }
   return row;
 }
 showColSonstiges2() {
   let col = [];
   for (let i = 0; i < this.props.state.leuteProSonstiges; i++ ) {
     col.push(
       <td key={"colSonstiges" + (i + 1)}></td>
     )
   }
     return col;
 }
  render() {
    return (
      <div>
      {this.showHeaderSonstiges()}
      </div>
    );
  }
}

export default ShowSonstiges;
