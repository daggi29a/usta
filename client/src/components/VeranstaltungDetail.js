import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import api from '../api';
import './Veranstaltung.css';
import ShowKasse2 from './ShowKasse2';
import ShowTheke2 from './ShowTheke2';
import ShowSonstiges2 from './ShowSonstiges2';
import ShowStuff2 from './ShowStuff2';
import { Button } from 'reactstrap';

class VeranstaltungDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kasseRow : ["1","2","3"],
      thekeRow : [],
      sonstigesRow : [],
    }
    this.updateStates = this.updateStates.bind(this);
  }
  componentDidMount() {
    let Id = { Id: this.props.match.params.id};

    api.getVeranstaltungById(Id)
      .then(veranstaltung => {
      this.setState({
        veranstaltungName: veranstaltung.veranstaltungName,
        veranstaltungDatum: veranstaltung.veranstaltungDatum,
        laden: veranstaltung.laden,
        vmensch: veranstaltung.vmensch,
        aufbau: veranstaltung.aufbau,
        catering: veranstaltung.catering,
        sonstiges: veranstaltung.sonstiges,
        sonstigesName: veranstaltung.sonstigesName,
        kasseAnzahl: veranstaltung.kasseAnzahl,
        thekeAnzahl: veranstaltung.thekeAnzahl,
        leuteProKasse: veranstaltung.leuteProKasse,
        leuteProSchicht: veranstaltung.leuteProSchicht,
        zeitenKasse: veranstaltung.zeitenKasse,
        zeitenSchicht: veranstaltung.zeitenSchicht,
        zeitenSonstiges: veranstaltung.zeitenSonstiges,
        sonstigesNameSchicht: veranstaltung.sonstigesNameSchicht,
        sonstigesAnzahl: veranstaltung.sonstigesAnzahl,
        leuteProSonstiges: veranstaltung.leuteProSonstiges,
        })
      })
      .catch(err => console.log(err))
  }

  updateStates(numberInArray) {
    console.log(numberInArray);
    let newRow = this.state.kasseRow;
    newRow[numberInArray]= "lalala"
    console.log(newRow);
    this.setState({
      kasseRow: newRow
    })
  }

  render() {
    return (
      <div className="VeranstaltungDetail">
        <div className="schichtplan">
          <div>
            <h3>{this.state.veranstaltungName}</h3></div>
          <div>
            <h5>{this.state.veranstaltungDatum} - <b> {this.state.laden} </b></h5></div>

            <ShowStuff2 state={this.state}/>
            <br />
            <hr />
            <ShowKasse2 state={this.state} updateStates={this.updateStates}/>
            <br />
            <ShowTheke2 state={this.state}/>
            <br />
            <ShowSonstiges2 state={this.state}/>
        </div>
      </div>

    );
  }
}

export default VeranstaltungDetail;
