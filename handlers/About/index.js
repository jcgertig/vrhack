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

class About extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state = {
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

  render(): ?ReactElement {
    return (
      <Entity>

        <DownButton />
      </Entity>
    );
  }

  static displayName = 'About';

  static propTypes = {
    // id: PropTypes.any.isRequired,
  };

}

export default About;
