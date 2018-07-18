import React, { Component } from 'react';
import api from '../api';

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      laden: "",
      randomString: this.randomString(),
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value

    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      email: this.state.email,
      laden: this.state.laden,
      randomString: this.state.randomString
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/adminstuff") // Redirect to the login page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }
randomString() {
    let randomString = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 30; i++)
      randomString += possible.charAt(Math.floor(Math.random() * possible.length));

    console.log(randomString);
    return randomString;
  }

  render() {

    return (
      <div className="AddUser">
        <h2>User hinzufügen</h2>
        <form>
          Email: <input type="text" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}} /> <br/>
          Laden:  <br/>
          <div onChange={(e) => {this.handleInputChange("laden", e)}}>
            <input type="radio" name="laden" value="cat"/>Cat<br/>
            <input type="radio" name="laden" value="sau"/>Sauschdall<br/>
            <input type="radio" name="laden" value="sc"/>Studentencafe<br/>
            <input type="radio" name="laden" value="usta"/>UstA e.V.<br/>
          </div>
          <br/>
          <hr/>
          <h2>Neuer User</h2><br/>
          Email: {this.state.email} <br/>
          Laden: {this.state.laden}<br/>
          Random: {this.state.randomString}<br/>
          <br/>
          <button onClick={(e) => this.handleClick(e)}>User hinzufügen</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
