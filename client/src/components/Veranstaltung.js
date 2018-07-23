// Example of component you can copy/paste to create new components

import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Alert
} from "reactstrap";
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
import "./Veranstaltung.css";
import ShowKasse from "./ShowKasse";
import ShowTheke from "./ShowTheke";
import ShowSonstiges from "./ShowSonstiges";
import ShowStuff from "./ShowStuff";
import api from "../api";

class Veranstaltung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            veranstaltungName: "",
            veranstaltungDatum: "",
            laden: "cat",
            vmensch: false,
            aufbau: false,
            catering: false,
            sonstiges: false,
            sonstigesName: "",
            kasseAnzahl: 0,
            thekeAnzahl: 0,
            leuteProKasse: 0,
            leuteProSchicht: 0,
            zeitenKasse: [],
            zeitenSchicht: [],
            zeitenSonstiges: [],
            sonstigesNameSchicht: "",
            sonstigesAnzahl: 0,
            leuteProSonstiges: 0
        };
    }

    handleInputChange(stateFieldName, event) {
        let newState = {};
        newState[stateFieldName] = event.target.value;
        this.setState(newState);
    }
    handleInputChangeObject(stateFieldName, i, event) {
        let zeiten = this.state[stateFieldName]; //creating copy of object
        zeiten[i] = event.target.value; //updating value
        this.setState(zeiten);
    }
    handleToggleClick(stateFieldName, event) {
        let newState = {};
        newState[stateFieldName] = !this.state[stateFieldName];

        this.setState(newState);
    }
    showZeiten(anzahl, zeit) {
        let times = [];
        for (let i = 0; i < this.state[anzahl]; i++) {
            times.push(
                <FormGroup key={i} className="zeiten-group">
                    <Label for={zeit + i}>Zeiten {i + 1}</Label>
                    <Input
                        type="text"
                        value={this.state[zeit[i]]}
                        onChange={e => {
                            this.handleInputChangeObject(zeit, i, e);
                        }}
                    />
                </FormGroup>
            );
        }
        console.log(this.state);
        return times;
    }

    handleClick(e) {
        e.preventDefault();
        let data = {
            veranstaltungName: this.state.veranstaltungName,
            veranstaltungDatum: this.state.veranstaltungDatum,
            laden: this.state.laden,
            vmensch: this.state.vmensch,
            aufbau: this.state.aufbau,
            catering: this.state.catering,
            sonstiges: this.state.sonstiges,
            sonstigesName: this.state.sonstigesName,
            kasseAnzahl: this.state.kasseAnzahl,
            thekeAnzahl: this.state.thekeAnzahl,
            leuteProKasse: this.state.leuteProKasse,
            leuteProSchicht: this.state.leuteProSchicht,
            zeitenKasse: this.state.zeitenKasse,
            zeitenSchicht: this.state.zeitenSchicht,
            zeitenSonstiges: this.state.zeitenSonstiges,
            sonstigesNameSchicht: this.state.sonstigesNameSchicht,
            sonstigesAnzahl: this.state.sonstigesAnzahl,
            leuteProSonstiges: this.state.leuteProSonstiges
        };
        api.postVeranstaltung(data)
            .then(result => {
                console.log("SUCCESS!");
                console.log(result);
                if (result.success) {
                    this.props.history.push("/veranstaltung/liste");
                } else {
                    this.setState({
                        error: result.message
                    });
                }
            })
            .catch(err => {
                console.log("ERROR");
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm veranstaltungForm">
                        {this.state.error && (
                            <Alert color="danger">{this.state.error}</Alert>
                        )}
                        <Form>
                            <FormGroup>
                                <Label for="name">Name </Label>
                                <Input
                                    type="text"
                                    name="veranstaltungName"
                                    value={this.state.veranstaltungName}
                                    onChange={e => {
                                        this.handleInputChange(
                                            "veranstaltungName",
                                            e
                                        );
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="datum">Datum </Label>
                                <Input
                                    type="date"
                                    name="veranstaltungDatum"
                                    value={this.state.veranstaltungDatum}
                                    onChange={e => {
                                        this.handleInputChange(
                                            "veranstaltungDatum",
                                            e
                                        );
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Laden</Label>
                                <Input
                                    type="select"
                                    value={this.state.laden}
                                    onChange={e => {
                                        this.handleInputChange("laden", e);
                                    }}
                                >
                                    <option value="cat">CAT</option>
                                    <option value="sau">Sauschdall</option>
                                    <option value="sc">Studentencafe</option>
                                    <option value="usta">UstA e.V.</option>
                                </Input>
                            </FormGroup>
                            <br />
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        value={this.state.vmensch}
                                        onChange={e => {
                                            this.handleToggleClick(
                                                "vmensch",
                                                e
                                            );
                                        }}
                                    />{" "}
                                    V-Mensch
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        value={this.state.aufbau}
                                        onChange={e => {
                                            this.handleToggleClick("aufbau", e);
                                        }}
                                    />{" "}
                                    Aufbau
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        value={this.state.catering}
                                        onChange={e => {
                                            this.handleToggleClick(
                                                "catering",
                                                e
                                            );
                                        }}
                                    />{" "}
                                    Catering
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        value={this.state.sonstiges}
                                        onChange={e => {
                                            this.handleToggleClick(
                                                "sonstiges",
                                                e
                                            );
                                        }}
                                    />{" "}
                                    <Label for="name">Sonstiges</Label>
                                    <Input
                                        type="text"
                                        name="sonstigesName"
                                        value={this.state.sonstigesName}
                                        onChange={e => {
                                            this.handleInputChange(
                                                "sonstigesName",
                                                e
                                            );
                                        }}
                                    />
                                </Label>
                            </FormGroup>
                        </Form>
                        <hr />
                        {/* _________________________________________________________________________________________*/}
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label
                                    for="kassenschichten"
                                    className="mr-sm-2"
                                >
                                    Kassenschichten
                                </Label>
                                <Input
                                    type="number"
                                    name="kasseAnzahl"
                                    value={this.state.kasseAnzahl}
                                    min="0"
                                    max="10"
                                    onChange={e => {
                                        this.handleInputChange(
                                            "kasseAnzahl",
                                            e
                                        );
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="leuteProKasse" className="mr-sm-2">
                                    Leute
                                </Label>
                                <Input
                                    type="number"
                                    name="leuteProKasse"
                                    value={this.state.leuteProKasse}
                                    min="0"
                                    max="10"
                                    onChange={e => {
                                        this.handleInputChange(
                                            "leuteProKasse",
                                            e
                                        );
                                    }}
                                />
                            </FormGroup>
                            {this.showZeiten("kasseAnzahl", "zeitenKasse")}
                        </Form>
                        <br />

                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label
                                    for="kassenschichten"
                                    className="mr-sm-2"
                                >
                                    Thekenschichten
                                </Label>
                                <Input
                                    type="number"
                                    name="thekeAnzahl"
                                    value={this.state.thekeAnzahl}
                                    min="0"
                                    max="10"
                                    onChange={e => {
                                        this.handleInputChange(
                                            "thekeAnzahl",
                                            e
                                        );
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label
                                    for="leuteProSchicht"
                                    className="mr-sm-2"
                                >
                                    Leute
                                </Label>
                                <Input
                                    type="number"
                                    name="leuteProSchicht"
                                    value={this.state.leuteProSchicht}
                                    min="0"
                                    max="10"
                                    onChange={e => {
                                        this.handleInputChange(
                                            "leuteProSchicht",
                                            e
                                        );
                                    }}
                                />
                            </FormGroup>
                            {this.showZeiten("thekeAnzahl", "zeitenSchicht")}
                        </Form>
                        <br />

                        <Form>
                            <FormGroup>
                                <Label for="name">Sonstiges</Label>
                                <Input
                                    type="text"
                                    name="sonstigesNameSchicht"
                                    value={this.state.sonstigesNameSchicht}
                                    onChange={e => {
                                        this.handleInputChange(
                                            "sonstigesNameSchicht",
                                            e
                                        );
                                    }}
                                />
                            </FormGroup>
                        </Form>

                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label
                                    for="sonstigesAnzahl"
                                    className="mr-sm-2"
                                >
                                    Sonstigesschichten
                                </Label>
                                <Input
                                    type="number"
                                    name="sonstigesAnzahl"
                                    value={this.state.sonstigesAnzahl}
                                    min="0"
                                    max="10"
                                    onChange={e => {
                                        this.handleInputChange(
                                            "sonstigesAnzahl",
                                            e
                                        );
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label
                                    for="leuteProSonstiges"
                                    className="mr-sm-2"
                                >
                                    Leute
                                </Label>
                                <Input
                                    type="number"
                                    name="leuteProSonstiges"
                                    value={this.state.leuteProSonstiges}
                                    min="0"
                                    max="10"
                                    onChange={e => {
                                        this.handleInputChange(
                                            "leuteProSonstiges",
                                            e
                                        );
                                    }}
                                />
                            </FormGroup>
                            {this.showZeiten(
                                "sonstigesAnzahl",
                                "zeitenSonstiges"
                            )}
                        </Form>
                        <br />
                        <Form>
                            <Button onClick={e => this.handleClick(e)}>
                                Absenden
                            </Button>
                        </Form>
                    </div>
                    {/* PAGEBREAK */}
                    <div className="col-sm schichtplan">
                        <div>
                            <h3>{this.state.veranstaltungName}</h3>
                        </div>
                        <div>
                            <h5>
                                {this.state.veranstaltungDatum} -{" "}
                                <b> {this.state.laden} </b>
                            </h5>
                        </div>
                        <ShowStuff state={this.state} />
                        <br />
                        <hr />
                        <ShowKasse state={this.state} />
                        <br />
                        <ShowTheke state={this.state} />
                        <br />
                        <ShowSonstiges state={this.state} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Veranstaltung;
