import React, { Component } from 'react';
import api from '../api';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {

      username:"",
      password: "",
      email: this.props.states.email,
      laden: "",
      firstname: "",
      lastname: "",
      tel:"",
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value

    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    let data = { ...this.state }
      // email: this.state.email,
      // username: this.state.username,
      // password: this.state.password,
      // laden: this.state.laden,
      // firstname: this.state.firstname,
      // lastname: this.state.lastname,
      // tel: this.state.tel

    api.signup(data)
    .then(res => {
      this.props.history.push('/login');
       // return <Redirect to="/login"/>
    })
    .catch(err => {
        console.log('ERROR')
    })
  }

  render() {
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <form>
          Email: <input type="text" value={this.state.email} readOnly /> <br/>
          Username: <input type="text" value={this.state.username} onChange={(e) => {this.handleInputChange("username", e)}} /> <br/>
          Password: <input type="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}}  /> <br/>
          Laden:  <br/>
          <div onChange={(e) => {this.handleInputChange("laden", e)}}>
            <input type="radio" name="laden" value="cat"/>Cat<br/>
            <input type="radio" name="laden" value="sau"/>Sauschdall<br/>
            <input type="radio" name="laden" value="sc"/>Studentencafe<br/>
            <input type="radio" name="laden" value="usta"/>UstA e.V.<br/>
          </div>
          <hr />Optional<br />
          Vorname: <input type="text" value={this.state.firstname} onChange={(e) => {this.handleInputChange("firstname", e)}} /> <br/>
          Nachname:<input type="text" value={this.state.lastname} onChange={(e) => {this.handleInputChange("lastname", e)}} /> <br/>
          Telefon: <input type="text" value={this.state.tel} onChange={(e) => {this.handleInputChange("tel", e)}} /> <br/>
          <button onClick={(e) => this.handleClick(e)}>Signup</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
