/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';

import {Animation, Entity, Scene} from 'aframe-react';

import VideoSky from 'VideoSky';
import DownButton from 'DownButton';

class Home extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state = {
    color: 'red',
  };

  timer = null;

  changeColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  // <a-cylinder
  //   src="/public/imgs/Bridge.jpg"
  //   height="30"
  //   rotation="0 160 0"
  //   scale="1 1 -1"
  //   radius="20"
  //   segments-radial="1000"
  // ></a-cylinder>

  navigateTo = (to) => {
    this.context.router.push(to);
  };

  startNavigation = (to) => {
    this.timer = setTimeout(()=>this.navigateTo(to), 1000);
  };

  stopNavigation = () => {
    clearTimeout(this.timer);
    // this.setState();
  };

  render(): ?ReactElement {
    return (
      <Entity>

        <Entity
          geometry="primitive: box; depth: 0.01; height: 4.5; width: 51.2"
          position="0 3.8 -10"
          material="src: 'url(/public/imgs/A_WEEKEND.png)'; transparent: true"
          scale="0.15 0.15 1"
        />

        <Entity
          geometry="primitive: box; depth: 0.01; height: 2; width: 51.2"
          position="0 3 -10"
          material="src: 'url(/public/imgs/THAT_BUILDS_COMMUNIT.png)'; transparent: true"
          scale="0.1 0.1 1"
        />

        <DownButton />
      </Entity>
    );
  }


  // <a-curvedimage
  //   src="/public/imgs/Background.jpg"
  //   height="18"
  //   radius="3"
  //   theta-length="200"
  //   rotation="0 90 0"
  //   scale="30 14 30"
  //   position="0 0 0"
  // />

  static displayName = 'Home';

}

export default Home;
