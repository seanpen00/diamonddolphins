import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import "./roadmap.css";
import NewRoadMap from "../newroadmap/newroadmap";

//import Assets
import roadmap from "../../assets/Roadmap.mp4";

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roadmaps: [
        {
          tag: "25%",
          title: "Phase 1",
          content: "Lorem ipsum. Lorem ipsum decet lorem ipsum."
        },
        {
          tag: "50%",
          title: "Phase 2",
          content: "Lorem ipsum. Lorem ipsum decet lorem ipsum."
        },
        {
          tag: "75%",
          title: "Phase 3",
          content: "Lorem ipsum. Lorem ipsum decet lorem ipsum."
        },
        {
          tag: "100%",
          title: "Phase 4",
          content: "Lorem ipsum. Lorem ipsum decet lorem ipsum."}
      ],
    };
  }

  render() {
    return (
      <div
        className="roadmap-control"
        id="roadmap"
        style={{
          paddingTop: 50,
          paddingBottom: 50,
          marginLeft: 2,
          marginRight: 2,
        }}
      >
        <Container
          style={{
            background: "linear-gradient(to bottom, #AFF5FF, #FFC17E)",
            padding: 30,
            borderRadius: 20,
            textAlign: "center",
            border: "solid 10px #000051"
          }}
        >
          <header>
            <text style={{ lineHeight: 1, color: "#ffebc1", textShadow: "7px 7px 2px black", fontStyle:"normal" }}>ROADMAP</text>
          </header>
          {/* <p className='roadmap-description'>
                        Welcome to the NFT Lottery Community.<br/>Get ready to go to the MOON!
                    </p> */}
          {/* <img  className="roadimage"style={{border:"solid 5px black", borderRadius: 20}}src="https://github.com/DeadBanditz/banditzsite/blob/main/src/assets/wood.png?raw=true" /> */}
          <Row style={{ paddingTop: 30 }}>
            <Col style={{ color: "white" }}>
              {this.state.roadmaps.map((item, index) => {
                return (
                  <RoadMapItem
                    style={{ color: "black" }}
                    key={index}
                    tag={item.tag}
                    title={item.title}
                    content={item.content}
                    content2={item.content2}
                    content3={item.content3}
                    content4={item.content4}
                    content5={item.content5}
                    content6={item.content6}
                  />
                );
              })}
            </Col>
          </Row>
          {/* <NewRoadMap /> */}
        </Container>
      </div>
    );
  }
}

export default RoadMap;
