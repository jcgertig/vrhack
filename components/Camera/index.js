/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';
import {Entity} from 'aframe-react';

class Camera extends Component {

  render(): ?ReactElement {
    return (
      <Entity>
        <Entity
          camera=""
          look-controls=""
          {...this.props}
        />
      </Entity>
    );
  }

  static displayName = 'Camera';

  static propTypes = {};

}

export default Camera;
