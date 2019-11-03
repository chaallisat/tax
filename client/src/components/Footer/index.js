import React from "react";
import Row from "../row/index";
import Col from "../col/index";
import "./footer.css";


function Footer() {
  return (

    <footer className="footer-main">

      <Row><Col size="lg-12" /><br></br></Row>
      <Row >
        <Col size="md-12"> <h5>Authors</h5> </Col>
      </Row>

      <div className="footer-items">
        <Row >
          <Col size="md-1" />

          {/* ------------ ChaA'llisa ------------ */}
          <Col size="md-2">
            <ul>
              <li>
                ChaA'llisa Taylor
          </li>
            </ul>
            <Row >
              <Col size="md-2">
                <li>
                  <a href="https://www.linkedin.com/in/chaa-llisa-taylor-50bba5183/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </Col>
              <Col size="md-2">
                <li>
                  <a href="https://chaallisat.github.io/">
                    <i className="fa fa-suitcase"></i>
                  </a>
                </li>
              </Col>
              <Col size="md-2">
                <li>
                  <a href="https://github.com/chaallisat">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </Col>
            </Row>
          </Col>
          <Col size="md-1" />
        </Row>
        <Row><Col size="lg-12" /><br></br></Row>
        <Row>
          <Col size="lg-12">
            <i className="fa fa-copyright">2019 Pet2Person </i>
          </Col>
        </Row>
        <Row><Col size="lg-12" /><br></br></Row>

      </div>


    </footer>
  );
}
export default Footer;