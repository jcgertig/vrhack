/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';
import {Entity} from 'aframe-react';

class VideoSky extends Component {

  render(): ?ReactElement {
    return (
      <Entity>
        <a-videosphere src="/public/R0010072.webm" scale="1 1 -1"></a-videosphere>

        <Entity
          geometry={{primitive: 'sphere', radius: 98}}
          material={{color: this.props.fadeColor, shader: 'flat', opacity: 0.6}}
          scale="1 1 -1"
        />
      </Entity>
    );
  }

  static displayName = 'VideoSky';

  static propTypes = {
    fadeColor: PropTypes.string.isRequired
  };

}

export default VideoSky;
