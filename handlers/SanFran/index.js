/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';

import {Animation, Entity, Scene} from 'aframe-react';

import Camera from 'Camera';
import Cursor from 'Cursor';
import VideoSky from 'VideoSky';
import DownButton from 'DownButton';

class SanFran extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state = {
    cover: ''
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
  };

  render(): ?ReactElement {
    return (
      <Entity>
        <a-cylinder
          src="/public/imgs/Bridge.jpg"
          height="35"
          rotation="0 240 0"
          scale="1 1 -1"
          radius="20"
          segments-radial="1000"
        ></a-cylinder>

        <Entity
          geometry="primitive: box; depth: 0.01; height: 12.2; width: 51.2"
          position="0 3.8 -10"
          material="src: 'url(/public/imgs/2016.png)'; transparent: true"
          scale="0.1 0.1 1"
        />

        <Entity
          geometry="primitive: box; depth: 0.01; height: 3.3; width: 51.2"
          position="0 2.7 -10"
          material="src: 'url(/public/imgs/SAN_FRANCISCO.png)'; transparent: true"
          scale="0.11 0.11 1"
        />

        <DownButton
          onMouseEnter={()=>{this.startNavigation('/san_francisco/overview');}}
          onMouseLeave={()=>{this.stopNavigation();}}
        />
      </Entity>
    );
  }

  static displayName = 'SanFran';

  static propTypes = {
    // id: PropTypes.any.isRequired,
  };

}

export default SanFran;
