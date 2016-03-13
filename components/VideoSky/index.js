/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';
import {Entity} from 'aframe-react';

class VideoSky extends Component {

  render(): ?ReactElement {
    return (
      <Entity>
        <Entity
          geometry={{primitive: 'sphere', radius: 5100}}
          material={{src: 'url(/public/Home-Fallback.jpg)', shader: 'flat'}}
          scale="1 1 -1"
        />

        <a-videosphere src="/public/R0010072.webm" scale="1 1 -1"></a-videosphere>

        <Entity
          geometry={{primitive: 'sphere', radius: 4980}}
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
