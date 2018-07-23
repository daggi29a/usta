import React, { Component } from "react";
import api from "../api";
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from "reactstrap";

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            token: this.randomString(),
            invites: []
        };
    }

    componentDidMount() {
        api.getUserInvites().then(res => {
            this.setState({
                invites: res
            });
        });
    }

    handleInputChange(stateFieldName, event) {
        let newState = {};
        newState[stateFieldName] = event.target.value;

        this.setState(newState);
    }

    handleClick(e) {
        e.preventDefault();
        let data = {
            email: this.state.email,
            token: this.state.token
        };
        api.postUserInvite(data)
            .then(result => {
                console.log("SUCCESS!", result);
                this.setState({
                    email: "",
                    token: this.randomString(),
                    message: `Email zu '${this.state.email}' gesendet`,
                    invites: [...this.state.invites, result.invite]
                    // delete example : invites: this.state.invites.filter(invite => invite._id != result.invite._id),
                });
                setTimeout(() => {
                    this.setState({
                        message: null
                    });
                }, 7000);
            })
            .catch(err => {
                console.log("ERROR");
            });
    }
    randomString() {
        let randomString = "";
        let possible =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 30; i++)
            randomString += possible.charAt(
                Math.floor(Math.random() * possible.length)
            );

        console.log(randomString);
        return randomString;
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <div className="AddUser">
                            <h4>User hinzufügen</h4>
                            {this.state.message && (
                                <Alert color="success">
                                    {this.state.message}
                                </Alert>
                            )}
                            <Form>
                                <FormGroup>
                                    <Label for="email">Email:</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={this.state.email}
                                        onChange={e => {
                                            this.handleInputChange("email", e);
                                        }}
                                        required
                                    />
                                    <br />
                                    <Button onClick={e => this.handleClick(e)}>
                                        User hinzufügen
                                    </Button>
                                </FormGroup>
                            </Form>
                            <hr />
                            <h4>Neuer User</h4>
                            <br />
                            Email: {this.state.email} <br />
                            Random: {this.state.token}
                            <br />
                            <br />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>User invites</h4>
                        {this.state.invites.map((invite, i) => {
                            return (
                                <div className="invite" key={i}>
                                    {invite.email}
                                </div>
                            );
                        })}
                        <hr />
                        <h4>User Liste</h4>
                        <div>test</div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AddUser;
