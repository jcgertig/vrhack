/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';

if (typeof window !== 'undefined') {
  require('aframe');
  require('aframe-text-component');
  require('../../public/Roboto_Regular');
}
import {Animation, Entity, Scene} from 'aframe-react';

import Camera from 'Camera';
import Cursor from 'Cursor';
import VideoSky from 'VideoSky';
import DownButton from 'DownButton';

class Home extends Component {

  state = {
    color: 'red'
  };

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

  render(): ?ReactElement {
    return (
      <div className="Home">
        <Scene>
          <Camera><Cursor/></Camera>

          <Entity
            light={{type: 'ambient', intensity: 2}}
          />

          <VideoSky fadeColor="#562C76" />

          <Entity
            geometry="primitive: box; depth: 0.01"
            position="-9 5 -9"
            material="src: 'url(/public/imgs/VRHack.png)'; transparent: true"
            scale="0.5 0.5 1"
            onClick={()=>{console.log('clicked');}}
          />

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

          <Entity
            geometry="primitive: box; depth: 0.01; height: 11; width: 51.2"
            position="6.2 5 -9"
            material="src: 'url(/public/imgs/ABOUT.png)'; transparent: true"
            scale="0.025 0.025 1"
          />

          <Entity
            geometry="primitive: box; depth: 0.01; height: 11; width: 51.2"
            position="6.2 5 -9"
            material="src: 'url(/public/imgs/ABOUT.png)'; transparent: true"
            scale="0.025 0.025 1"
          />

          <Entity
            geometry="primitive: box; depth: 0.01; height: 15.1; width: 51.2"
            position="7.8 5 -9"
            material="src: 'url(/public/imgs/PAST.png)'; transparent: true"
            scale="0.019 0.019 1"
          />

          <Entity
            geometry="primitive: box; depth: 0.01; height: 7.8; width: 51.2"
            position="9.6 5 -9"
            material="src: 'url(/public/imgs/REGISTER.png)'; transparent: true"
            scale="0.035 0.035 1"
          />

          <DownButton />

        </Scene>
      </div>
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
