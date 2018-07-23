// Example of component you can copy/paste to create new components


import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
import './Veranstaltung.css';
import ShowKasse from './ShowKasse';
import ShowTheke from './ShowTheke';
import ShowSonstiges from './ShowSonstiges';
import ShowStuff from './ShowStuff';


class Veranstaltung extends Component {
   constructor(props) {
     super(props)
     this.state = {
       veranstaltungName: "",
       veranstaltungDatum: "",
       laden: "cat",
       vmensch: false,
       aufbau: false,
       catering: false,
       sonstiges: false,
       sonstigesName: "",
       kasseAnzahl: 0,
       thekeAnzahl: 0,
       leuteProKasse: 0,
       leuteProSchicht: 0,
       zeitenKasse: [],
       zeitenSchicht: [],
       zeitenSonstiges: [],
       sonstigesNameSchicht: "",
       sonstigesAnzahl: 0,
       leuteProSonstiges: 0,
     }
   }

   handleInputChange(stateFieldName, event) {
     let newState = {}
     newState[stateFieldName] = event.target.value
     this.setState(newState)
   }
   handleInputChangeObject(stateFieldName, i, event) {
     let zeiten = this.state[stateFieldName];    //creating copy of object
     zeiten[i] = event.target.value;                           //updating value
     this.setState(zeiten);
   }
   handleToggleClick(stateFieldName, event) {
     let newState = {}
     newState[stateFieldName] = !this.state[stateFieldName];

     this.setState(newState)
   }
   showZeiten(anzahl, zeit) {
     let times = [];
     for (let i = 0; i < this.state[anzahl]; i++) {
       times.push(
         <label key={zeit + i}>
           Zeiten {i + 1}:
           <input type="text" value={this.state[zeit[i]]}
           onChange={(e) => {this.handleInputChangeObject(zeit, i, e)}} />
         </label>
       )
     }
     return times;
     }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm veranstaltungForm">
            <form>
              <label>
                Name:
                <input type="text" name="veranstaltungName" value={this.state.veranstaltungName}
                onChange={(e) => {this.handleInputChange("veranstaltungName", e)}} />
              <br />
              </label>
              <label>
                Datum:
                <input type="date" name="veranstaltungDatum" value={this.state.veranstaltungDatum}
                onChange={(e) => {this.handleInputChange("veranstaltungDatum", e)}} />
              </label>
              <br />
              <label>
                Laden:
                <select value={this.state.laden} onChange={(e) => {this.handleInputChange("laden", e)}}>
                  <option value="cat">CAT</option>
                  <option value="sau">Sauschdall</option>
                  <option value="sc">Studentencafe</option>
                  <option value="usta">UstA e.V.</option>
                </select>
              </label>
              <br />
              <label>
                <input type="checkbox" name="vmensch" value={this.state.vmensch}
                onChange={(e) => {this.handleToggleClick("vmensch", e)}} />
                V-Mensch
              </label>
              <br />
              <label>
                <input type="checkbox" name="aufbau" value={this.state.aufbau}
                onChange={(e) => {this.handleToggleClick("aufbau", e)}} />
                Aufbau
              </label>
              <br />
              <label>
                <input type="checkbox" name="catering" value={this.state.catering}
                onChange={(e) => {this.handleToggleClick("catering", e)}} />
                Catering
              </label>
              <br />
              <label>
                <input type="checkbox" name="sonstiges" value={this.state.sonstiges}
                onChange={(e) => {this.handleToggleClick("sonstiges", e)}} />
                Sonstiges:
                <input type="text" name="sonstigesName" value={this.state.sonstigesName}
                onChange={(e) => {this.handleInputChange("sonstigesName", e)}} />
              </label>
{/* _________________________________________________________________________________________*/}
              <hr />
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                  <label>
                    Anzahl Kassenschichten:
                    <input type="number" name="kasseAnzahl" value={this.state.kasseAnzahl} min="0" max="10"
                    onChange={(e) => {this.handleInputChange("kasseAnzahl", e)}} />
                    </label>
                  </div>
                  <div className="col-sm">
                    <label>
                      Anzahl Leute pro Kasse:
                      <input type="number" name="leuteProKasse" value={this.state.leuteProKasse} min="0" max="10"
                      onChange={(e) => {this.handleInputChange("leuteProKasse", e)}} />
                    </label>
                  </div>
                </div>
                {this.showZeiten("kasseAnzahl", "zeitenKasse")}
              </div>
              <br />
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                  <label>
                    Thekenschichten:
                    <input type="number" name="thekeAnzahl" value={this.state.thekeAnzahl} min="0" max="10"
                    onChange={(e) => {this.handleInputChange("thekeAnzahl", e)}} />
                    </label>
                  </div>
                  <div className="col-sm">
                    <label>
                      Leute pro Thekenschicht:
                      <input type="number" name="leuteProSchicht" value={this.state.leuteProSchicht} min="0" max="10"
                      onChange={(e) => {this.handleInputChange("leuteProSchicht", e)}} />
                    </label>
                  </div>
                </div>
                {this.showZeiten("thekeAnzahl", "zeitenSchicht")}
              </div>
              <br />
              <label>
                Sonstiges:
                <input type="text" name="sonstigesNameSchicht" value={this.state.sonstigesNameSchicht}
                onChange={(e) => {this.handleInputChange("sonstigesNameSchicht", e)}} />
              </label>
              <br />
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                  <label>
                    Anzahl Sonstiges:
                    <input type="number" name="sonstigesAnzahl" value={this.state.sonstigesAnzahl} min="0" max="10"
                    onChange={(e) => {this.handleInputChange("sonstigesAnzahl", e)}} />
                    </label>
                  </div>
                  <div className="col-sm">
                    <label>
                      Anzahl Leute Sonstiges:
                      <input type="number" name="leuteProSonstiges" value={this.state.leuteProSonstiges} min="0" max="10"
                      onChange={(e) => {this.handleInputChange("leuteProSonstiges", e)}} />
                    </label>
                  </div>
                </div>
                {this.showZeiten("sonstigesAnzahl", "zeitenSonstiges")}
              </div>
              <br />
            </form>
          </div>
{/* PAGEBREAK */}
          <div className="col-sm">
            <div><h3>{this.state.veranstaltungName}</h3></div>
            <div><h5>{this.state.veranstaltungDatum} - <b> {this.state.laden} </b></h5></div>
            <ShowStuff state={this.state}/>
          <br />
          <hr />
          <ShowKasse state={this.state}/>
          <br />
          <ShowTheke state={this.state}/>
          <br />
          <ShowSonstiges state={this.state}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Veranstaltung;
