import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import { Container, Col, Row, Button } from "reactstrap";

class VeranstaltungListe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            veranstaltungListe: []
        };
    }
    componentDidMount() {
        api.getVeranstaltung()
            .then(veranstaltungen => {
                console.log(veranstaltungen);
                this.setState({
                    veranstaltungListe: veranstaltungen
                });
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <div className="VeranstaltungListe">
                                <h4>Veranstaltungen:</h4>
                                <ul>
                                    {this.state.veranstaltungListe.map(
                                        (c, i) => (
                                            <li key={i} className="listitem">
                                                <Link
                                                    to={
                                                        "/veranstaltung/" +
                                                        c._id
                                                    }
                                                >
                                                    {c.veranstaltungName}
                                                </Link>
                                                <div className="info">
                                                    {api.getFormattedDate(
                                                        c.veranstaltungDatum
                                                    )}{" "}
                                                    - {c.laden}
                                                </div>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <hr />
                            <Button
                                className="align-right"
                                tag={Link}
                                to="/veranstaltung/erstellen"
                            >
                                Neue Veranstaltung erstellen
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default VeranstaltungListe;
