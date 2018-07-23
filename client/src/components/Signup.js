import React, { Component } from "react";
import api from "../api";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import {
    Label,
    Form,
    FormGroup,
    Input,
    FormText,
    Container,
    Row,
    Col,
    Button,
    Alert
} from "reactstrap";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: this.props.states.email,
            laden: "cat",
            firstname: "",
            lastname: "",
            tel: "",
            error: ""
        };
    }

    handleInputChange(stateFieldName, event) {
        console.log(stateFieldName, event.target.value);
        let newState = {};
        newState[stateFieldName] = event.target.value;

        this.setState(newState);
    }

    handleClick(e) {
        e.preventDefault();
        let data = {
            email: this.state.email,
            password: this.state.password,
            laden: this.state.laden,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            tel: this.state.tel
        };

        api.signup(data)
            .then(res => {
                if (res.success) {
                    console.log("user was registered");
                    api.deleteUserInvite(this.state.email).then(res => {
                        console.log(res);
                        if (res.success) {
                            console.log("HERE");
                            this.props.history.push("/login");
                        } else {
                            this.setState({
                                error: res.message
                            });
                        }
                        //
                    });
                } else {
                    this.setState({
                        error: res.message
                    });
                }
            })
            .catch(err => {
                console.log("ERROR");
            });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {this.state.error && (
                            <Alert color="danger">{this.state.error}</Alert>
                        )}
                        <div className="Signup">
                            <Form>
                                <h4>Signup</h4>
                                <FormGroup row>
                                    <Label for="email" sm={2}>
                                        Email
                                    </Label>
                                    <Col sm={4}>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={this.state.email}
                                            readOnly
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={2}>
                                        Password
                                    </Label>
                                    <Col sm={4}>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={this.state.password}
                                            onChange={e => {
                                                this.handleInputChange(
                                                    "password",
                                                    e
                                                );
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="laden" sm={2}>
                                        Laden
                                    </Label>
                                    <Col sm={4}>
                                        <Input
                                            name="laden"
                                            id="laden"
                                            type="select"
                                            value={this.state.laden}
                                            onChange={e => {
                                                this.handleInputChange(
                                                    "laden",
                                                    e
                                                );
                                            }}
                                        >
                                            <option value="cat">CAT</option>
                                            <option value="sau">
                                                Sauschdall
                                            </option>
                                            <option value="sc">
                                                Studentencafe
                                            </option>
                                            <option value="usta">
                                                UstA e.V.
                                            </option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="optional" sm={2}>
                                        Vorname
                                    </Label>
                                    <Col sm={4}>
                                        <Input
                                            type="text"
                                            value={this.state.firstname}
                                            onChange={e => {
                                                this.handleInputChange(
                                                    "firstname",
                                                    e
                                                );
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="optional" sm={2}>
                                        Nachname
                                    </Label>
                                    <Col sm={4}>
                                        <Input
                                            type="text"
                                            value={this.state.lastname}
                                            onChange={e => {
                                                this.handleInputChange(
                                                    "lastname",
                                                    e
                                                );
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <h4>Optional</h4>
                                <FormGroup row>
                                    <Label for="optional" sm={2}>
                                        Tel
                                    </Label>
                                    <Col xs={4}>
                                        <Input
                                            type="text"
                                            value={this.state.tel}
                                            onChange={e => {
                                                this.handleInputChange(
                                                    "tel",
                                                    e
                                                );
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <Button
                                    color="primary"
                                    onClick={e => {
                                        this.handleClick(e);
                                    }}
                                >
                                    Speichern
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(Signup);
