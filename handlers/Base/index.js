/** @flow */
'use strict';

require('./styles.css');

import React, {Component,PropTypes} from 'react';



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

class Base extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  timer = null;

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

  componentDidMount() {
    if (annyang) {
      // Let's define a command.
      var commands = {
        'about': ()=>this.navigateTo('/about'),
        'home': ()=>this.navigateTo('/')
      };

      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening.
      annyang.start();
    }
  }


  render(): ?ReactElement {
    return (
      <div className="Base">
        <Scene>
          <Camera><Cursor/></Camera>

          <Entity
            light={{type: 'ambient', intensity: 2}}
          />

          <VideoSky fadeColor="#562C76" />

          <Entity
            geometry="primitive: box; depth: 0.01"
            position="-3 2.2 -3"
            material="src: 'url(/public/imgs/VRHack.png)'; transparent: true"
            scale="0.25 0.25 1"
            onMouseEnter={()=>{this.startNavigation('/');}}
            onMouseLeave={()=>{this.stopNavigation('/');}}
          />

          <Entity
            geometry="primitive: box; depth: 0.01; height: 5.5; width: 25.51"
            position="1.4 2.2 -3"
            material="src: 'url(/public/imgs/ABOUT.png)'; transparent: true"
            scale="0.025 0.025 1"
            onMouseEnter={()=>{this.startNavigation('/about');}}
            onMouseLeave={()=>{this.stopNavigation();}}
          />

          <Entity
            geometry="primitive: box; depth: 0.01; height: 7.55; width: 25.51"
            position="2.15 2.2 -3"
            material="src: 'url(/public/imgs/PAST.png)'; transparent: true"
            scale="0.019 0.019 1"
            onMouseEnter={()=>{console.log('hovered 2')}}
          />

          <Entity
            geometry="primitive: box; depth: 0.01; height: 3.55; width: 25.51"
            position="3 2.2 -3"
            material="src: 'url(/public/imgs/REGISTER.png)'; transparent: true"
            scale="0.035 0.035 1"
            onMouseEnter={()=>{console.log('hovered 3')}}
          />

          {this.props.children}

        </Scene>
      </div>
    );
  }
}

export default Base;
