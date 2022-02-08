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
          tag: "0%",
          title: "Phase 1",
          content: "Marketing campaigns fire up with the launch of the social media , website and discord. We will be spending $150,000 to let the world know the Diamond Dolphins club exist. We want to build a thriving community !"
        },
        {
          tag: "25%",
          title: "Phase 2",
          content: "On the 8th of Feburary , we drop 7,777 Diamond Dolphins in the Ethereum Blockchain. 10% of every sold Dolphin goes to the Ocean Clean up Project! They rid the ocean of plastic and waste."
        },
        {
          tag: "50%",
          title: "Phase 3",
          content: "Giveaway for holders 5 holders that mint the rarest dolphins the golden dolphins will each receive $5,000. Anyone who owns 3 or more diamond dolphins will be entered to win $25,000"
        },
        {
          tag: "75%",
          title: "Phase 4",
          content: "Diamond Dolphins Miami takeover we will throw the greatest exclusive meet ups for our holders ! Where we will give away a Tesla Model 3 for one of our lucky holders on the contingency that all 7,777 Diamond Dolphins have been minted."
        },
        {
          tag: "100%",
          title: "Phase 5",
          content: "We wanted keep it a secret but it’s hard. We will tokenize this whole project generate 1 billion $Dolphin tokens which Diamond Dolphins holder will be airdrop free tokens the plan is to continue growing the community and helping clean the ocean. 5% transaction fee from buying and selling $Dolphin token plus individual donations are all added to the Clean the ocean Fund for the community to distribute as it sees fit."}
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
            <Col style={{ color: "black" }}>
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
