import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import "./Veranstaltung.css";
import ShowKasse2 from "./ShowKasse2";
import ShowTheke2 from "./ShowTheke2";
import ShowSonstiges2 from "./ShowSonstiges2";
import ShowStuff2 from "./ShowStuff2";
import { Button, Row, Container, Col, Alert } from "reactstrap";

class VeranstaltungDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kasseRow: [],
            thekeRow: [],
            sonstigesRow: []
        };
        this.updateStates = this.updateStates.bind(this);
    }
    componentDidMount() {
        let Id = { Id: this.props.match.params.id };

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
                    leuteProSonstiges: veranstaltung.leuteProSonstiges
                });
            })
            .catch(err => console.log(err));
    }

    updateStates(numberInArray, value) {
        console.log(numberInArray);
        let newRow = this.state.kasseRow;
        newRow[numberInArray] = value;
        console.log(newRow);
        this.setState({
            kasseRow: newRow
        });
    }

    handleClick(e) {
        let data = {
            kasseRow: this.state.kasseRow,
            thekeRow: this.stateThekeRow
        };
        /* todo */
        let res = api.updateSchichtplan(data);
        console.log(res);
        if (res.message) {
            this.setState({ message: res.message });
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        {this.state.message && (
                            <Alert color="success">{this.state.message}</Alert>
                        )}
                        <div className="VeranstaltungDetail">
                            <div className="schichtplan">
                                <div>
                                    <h4>{this.state.veranstaltungName}</h4>
                                </div>
                                <div>
                                    <h5>
                                        {api.getFormattedDate(
                                            this.state.veranstaltungDatum
                                        )}{" "}
                                        - <b> {this.state.laden} </b>
                                    </h5>
                                </div>

                                <ShowStuff2 state={this.state} />
                                <br />
                                <hr />
                                <ShowKasse2
                                    state={this.state}
                                    updateStates={this.updateStates}
                                />
                                <br />
                                <ShowTheke2 state={this.state} />
                                <br />
                                <ShowSonstiges2 state={this.state} />
                            </div>
                        </div>

                        <Button
                            color="primary"
                            onClick={e => this.handleClick(e)}
                        >
                            Plan speichern
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default VeranstaltungDetail;
