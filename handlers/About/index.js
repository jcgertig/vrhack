/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';

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
