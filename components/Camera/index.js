/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';
import {Entity} from 'aframe-react';

class Camera extends Component {

  render(): ?ReactElement {
    return (
      <Entity>
        <Entity
          no-click-look-controls="maxyaw:0.8;maxpitch:1"
          camera=""
          look-controls=""
          wasd-controls=""
          {...this.props}
        />
      </Entity>
    );
  }

  static displayName = 'Camera';

  static propTypes = {};

}

export default Camera;