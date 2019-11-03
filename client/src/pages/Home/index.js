import React, { Component } from "react";
import "./home.css";
import Nav from "../../components/Nav"

// function App() {
class Home extends Component {


  render() {
    return (
      <div>
        <Nav />

        <div className="section white">
          <div className="row container">
            <h1 className="header season">Loranda Tax Service</h1>
            <h5>Where taxes become easy</h5>
          </div>
        </div>

        <div className="parallax-container">
          <div className="parallax">
            <img alt="pic" src="https://cdn.pixabay.com/photo/2018/04/06/11/21/office-3295556_960_720.jpg"></img>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
