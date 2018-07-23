import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import api from '../api';
import './VeranstaltungListe.css';

class VeranstaltungListe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      veranstaltungListe: []
    }
  }
  componentDidMount() {
    api.getVeranstaltung()
      .then(veranstaltungen => {
        console.log(veranstaltungen)
        this.setState({
          veranstaltungListe: veranstaltungen
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
      <div className="VeranstaltungListe">
        <h2>Veranstaltungen:</h2>
        {this.state.veranstaltungListe.map((c, i) =>
          <li key={i} className="listitem">
            <Link to={"/veranstaltung/" + c._id}>{c.veranstaltungName}</Link><br />
            {api.getFormattedDate(c.veranstaltungDatum)} - {c.laden}
          </li>
        )}
      </div>
      <hr />
      <Link to="/veranstaltung/erstellen">Neue Veranstaltung erstellen</Link>
      </div>
    );
  }
}

export default VeranstaltungListe;
