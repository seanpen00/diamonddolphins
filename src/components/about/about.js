import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from "../../assets/toiletemblem.png";
import YButton from "../basic/YButton";

//import CSS
import "./about.css";
class About extends React.Component {
  render() {
    return (
      <div id="about" className="about-control">
        <Container
          style={{
            background: "linear-gradient(to bottom, #AFF5FF, #FFC17E)",
            border: "solid #000051 10px",
            borderRadius: 20,
            maxWidth: 1200
          }}
        >
          <Row style={{ padding: "25px", paddingBottom: "45px" }}>
            <Col
              md={6}
              xs={12}

            >
              <text className="about-description"
                style={{ textAlign: "center" }}>
                <header style={{ color: "#E8B331", textAlign: "center" }}>
                  <span style={{ color: "#FFEBC1" }}>ABOUT</span>
                  <br />
                </header>
                <p style={{maxWidth: 400, margin: "auto"}}>
                  <div style={{ textAlign: "center" }}>
                    <br />
                    Lorem ipsum. Lorem ipsum decet lorem ipsum.
                    Lorem ipsum. Lorem ipsum decet lorem ipsum.
                    Lorem ipsum. Lorem ipsum decet lorem ipsum.
                    <br /><br />
                    Lorem ipsum. Lorem ipsum decet lorem ipsum.
                    Lorem ipsum. Lorem ipsum decet lorem ipsum.
                    Lorem ipsum. Lorem ipsum decet lorem ipsum.<br /><br />
                    Lorem ipsum. Lorem ipsum decet lorem ipsum.
                    Lorem ipsum. Lorem ipsum decet lorem ipsum.
                    Lorem ipsum. Lorem ipsum decet lorem ipsum.<br /><br />
                    <text style={{fontSize: 22}}>Lorem ipsum. Lorem ipsum decet lorem ipsum.Lorem ipsum. Lorem ipsum decet lorem ipsum.</text>
                  </div>
                </p>

              </text>
            </Col>
            <Col md={6} xs={12} className="image-control">
              <img
                style={{ borderRadius: 20 }}
                src={AboutGif}
                alt="about gif"
              />
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default About;
