// import logo from './logo.svg';
import './App.css';
import React, { Suspense, useEffect } from "react";

//import components
import Header from './components/header/header';
import Team from './components/team/team';
import JoinCommunity from './components/join-community/join-community';
import Footer from './components/footer/footer';
import RoadMap from './components/roadmap/roadmap';
import TopItems from './components/top-items/top-items';
import Mint from './components/mint/mint';
import About from './components/about/about';
import Meet from './components/meet/meet';
import NewTeam from './components/newteam/newteam';
import NewRoadMap from './components/newroadmap/newroadmap';
import FounderThing from './components/founderthing/founderthing';
import FaqMap from './components/faqmap/faqmap';
// import il from './assets/CenterPic.png';
import './assets/newStyle.css';
// import Team from './components/team/team';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.timerID = setTimeout(
      () => this.clearBackGround(),
      0
    );
  }

  clearBackGround = () => {
    this.setState({
      isLoading: false
    });
  }
  render() {
    return (
      this.state.isLoading ?
        <div className='black-bg'>
        </div> :
        <div >
          <Header />
          <About />
          {/* <Meet /> */}

          <Mint />
          <RoadMap />
          {/* <NewRoadMap /> */}
          {/* <FounderThing /> */}
          {/* <JoinCommunity /> */}

          {/* <TopItems /> */}
          {/* <FaqMap /> */}
          <Team />
          {/* <NewTeam /> */}
          <Footer />
        </div>
    );
  }

}

export default App;
