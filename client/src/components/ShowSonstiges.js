// Example of component you can copy/paste to create new components


import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
// import './Sample.css';

class ShowSonstiges extends Component {
   constructor(props) {
     super(props)
  }

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
       <th scope="col">{i+1}</th>
     )
   }
     return col;
 }
 showRowSonstiges() {
   let row = [];
   for (let j = 0; j < this.props.state.sonstigesAnzahl; j++ ) {
     row.push(
         <tr>
           <th scope="row">{j+1}</th>
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
       <td>{i+1}</td>
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
