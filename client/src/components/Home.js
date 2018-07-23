import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //   }
    // }
    render() {
        return (
            <div className="landing-container">
                <div className="content-card alpha centered">
                    <h2>Wilkommen auf der UstA e.V. webseite</h2>
                    Bitte <Link to="/login">loggen Sie sich ein</Link> um weiter
                    zu machen
                </div>
            </div>
        );
    }
}

export default Home;
