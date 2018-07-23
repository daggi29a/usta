import React, { Component } from "react";
import api from "../api";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleInputChange(stateFieldName, event) {
        let newState = {};
        newState[stateFieldName] = event.target.value;

        this.setState(newState);
    }

    handleClick(e) {
        e.preventDefault();
        api.login(this.state.email, this.state.password)
            .then(result => {
                console.log("SUCCESS!");
                this.props.history.push("/"); // Redirect to the home page
            })
            .catch(err => {
                console.log("ERROR");
            });
    }

    render() {
        return (
            <div className="landing-container">
                <div className="content-card alpha">
                    <h2>Login</h2>
                    <Form>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="text"
                                placeholder="Deine email Adresse"
                                value={this.state.email}
                                onChange={e => {
                                    this.handleInputChange("email", e);
                                }}
                            />{" "}
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Passwort</Label>
                            <Input
                                type="password"
                                value={this.state.password}
                                onChange={e => {
                                    this.handleInputChange("password", e);
                                }}
                            />
                        </FormGroup>
                        <Button
                            color="primary"
                            onClick={e => this.handleClick(e)}
                        >
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;
