import api from "../api";
import React, { Component } from "react";
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
import Signup from "./Signup";
import { Container, Col, Row } from "reactstrap";
// import './Sample.css';

class CheckInvite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInDatabase: false,
            email: ""
        };
    }

    componentDidMount() {
        let token = { token: this.props.match.params.id };
        api.checkUserInvite(token).then(res => {
            this.setState({
                isInDatabase: true,
                email: res.email
            });
        });
    }
    ifInDatabase() {
        console.log(typeof this.state.email);
        if (this.state.email != "") {
            return <Signup states={this.state} />;
        } else {
            return (
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            Kein Zugriff
                        </Col>
                    </Row>
                </Container>
            );
        }
    }

    render() {
        return <div className="nothing">{this.ifInDatabase()}</div>;
    }
}

export default CheckInvite;
