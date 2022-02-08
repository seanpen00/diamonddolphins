import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//import CSS
import './team.css';

//import image assets
import a from '../../assets/toiletemblem.png';
import b from '../../assets/toiletemblem.png';
import c from '../../assets/toiletemblem.png';
import d from '../../assets/toiletemblem.png';
import e from '../../assets/toiletemblem.png';
import f from '../../assets/toiletemblem.png';
import g from '../../assets/toiletemblem.png';
import h from '../../assets/toiletemblem.png';
// import CTOImage from '../../assets/team/about.gif';
// import CMOImage from '../../assets/team/about.gif';
// import CFOImage from '../../assets/team/about.gif'

//import Component
import TeamMember from "./teammember";
class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [
                {
                    image: a,
                    title: 'Job',
                    name: "Name"
                },
                {
                    image: a,
                    title: 'Job',
                    name: "Name"
                },
                {
                    image: a,
                    title: 'Job',
                    name: "Name"
                },
                {
                    image: a,
                    title: 'Job',
                    name: "Name"
                },
                {
                    image: a,
                    title: 'Job',
                    name: "Name"
                },
                {
                    image: a,
                    title: 'Job',
                    name: "Name"
                },
                {
                    image: a,
                    title: 'Job',
                    name: "Name"
                },
                {
                    image: a,
                    title: 'Job',
                    name: "Name"
                },
            ]
        }
    }

    render() {
        return (
            <div className='team-control' id='team'>
                <Container style={{ paddingLeft: "50px", paddingRight: "50px", background: "linear-gradient(to bottom, #AFF5FF, #FFC17E)", borderRadius: "20px", border: "solid #000051 10px" }}>
                    <header style={{textShadow: "3px 3px 2px black"}}> TEAM MEMBERS </header>
                    {/* <Row>
                        <Col className="team-control-card" md={6} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[0].image}
                                title={this.state.teams[0].title}
                                title2={this.state.teams[0].title2}
                                name={this.state.teams[0].name}
                            />
                        </Col>
                        <Col className="" md={6} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[1].image}
                                title={this.state.teams[1].title}
                                name={this.state.teams[1].name}
                            />
                        </Col>
                    </Row> */}
                    <Row>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[0].image}
                                title={this.state.teams[0].title}
                                name={this.state.teams[0].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[1].image}
                                title={this.state.teams[1].title}
                                name={this.state.teams[1].name}
                            />
                        </Col>
                        <Col className="" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[2].image}
                                title={this.state.teams[2].title}
                                name={this.state.teams[2].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[3].image}
                                title={this.state.teams[3].title}
                                name={this.state.teams[3].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[4].image}
                                title={this.state.teams[4].title}
                                name={this.state.teams[4].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[5].image}
                                title={this.state.teams[5].title}
                                name={this.state.teams[5].name}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Team