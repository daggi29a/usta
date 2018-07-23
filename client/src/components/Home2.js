import React, { Component } from 'react';

class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <p>This is a sample project with the MERN stack</p>

      <div id="carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
          <div className="carousel-item active"><img className="d-block w-100" src="https://res.cloudinary.com/dazh9innn/image/upload/v1531253140/josh-rose-506979-unsplash.jpg" alt="First slide"/></div>
            <div className="carousel-item"><img className="d-block w-100" src="https://res.cloudinary.com/dazh9innn/image/upload/v1531728414/wing-light-black-and-white-architecture-structure-white-682880-pxhere.com.jpg" alt="Second slide"/></div>
            <div className="carousel-item"><img className="d-block w-100" src="https://res.cloudinary.com/dazh9innn/image/upload/v1531728414/abstract-black-blocks-shapes-monochrome-modern-wide.jpg" alt="Third slide"/></div>
            <div className="carousel-item"><img className="d-block w-100" src="https://res.cloudinary.com/dazh9innn/image/upload/v1531253140/joshua-hoehne-547348-unsplash.jpg" alt="Forth slide"/></div>
          </div>
        </div>
        </div>
    );
  }
}

export default Home;
