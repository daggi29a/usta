// Example of component you can copy/paste to create new components
import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
// import './Sample.css';
import './Profil.css';

class Profil extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <div className="Profil">
        Profil von Mr. User
        <div className="container">
          <div className="row">
            <div className="col-9">
              Stuff <br />
              Stuff <br />
              Stuff <br />
              Stuff <br />
            </div>
            <div className="col">
              <img src="https://pbs.twimg.com/profile_images/469017630796296193/R-bEN4UP.png" alt="User Bild" className="userImage" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profil;
